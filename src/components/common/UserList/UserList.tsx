import { useUsersQuery } from '@/hooks';

export const UserList = (): JSX.Element => {
  const { data, isLoading, error } = useUsersQuery();

  if (isLoading) {
    return <p className="text-t10_body_2 text-text-secondary">Loading users…</p>;
  }

  if (error) {
    return (
      <p className="text-t10_body_2 text-text-alerts-error" role="alert">
        Failed to load users
      </p>
    );
  }

  if (!data?.length) {
    return <p className="text-t10_body_2 text-text-secondary">No users</p>;
  }

  return (
    <ul className="list-disc space-y-1 pl-6 text-t10_body_2 text-text-primary">
      {data.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};
