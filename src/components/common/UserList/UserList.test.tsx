import { describe, it, expect, vi, beforeEach } from 'vitest';

import { render, screen, waitFor } from '@/__tests__/utils';
import { UserList } from './UserList';

const mockGetUsers = vi.fn();

vi.mock('@/services/api/users', () => ({
  getUsers: () => mockGetUsers(),
}));

describe('UserList', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows loading state initially', () => {
    mockGetUsers.mockImplementation(() => new Promise(() => {}));
    render(<UserList />);
    expect(screen.getByText(/Loading users/)).toBeInTheDocument();
  });

  it('renders user list when data is loaded', async () => {
    mockGetUsers.mockResolvedValue({
      data: [
        { id: '1', name: 'Alice', email: 'alice@example.com' },
        { id: '2', name: 'Bob', email: 'bob@example.com' },
      ],
    });
    render(<UserList />);
    await waitFor(() => {
      expect(screen.getByText(/Alice/)).toBeInTheDocument();
    });
    expect(screen.getByText(/Bob/)).toBeInTheDocument();
    expect(screen.getByText(/alice@example.com/)).toBeInTheDocument();
  });

  it('shows error state when request fails', async () => {
    mockGetUsers.mockRejectedValue(new Error('Network error'));
    render(<UserList />);
    await waitFor(() => {
      expect(screen.getByRole('alert', { name: /Failed to load users/ })).toBeInTheDocument();
    });
  });

  it('shows empty state when data is empty', async () => {
    mockGetUsers.mockResolvedValue({ data: [] });
    render(<UserList />);
    await waitFor(() => {
      expect(screen.getByText(/No users/)).toBeInTheDocument();
    });
  });
});
