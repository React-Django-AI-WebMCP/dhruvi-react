import { API_ENDPOINTS } from '@/constants/api';

export const endpoints = {
  health: () => API_ENDPOINTS.HEALTH,
  users: {
    list: () => API_ENDPOINTS.USERS,
    detail: (id: string) => API_ENDPOINTS.USER_DETAIL(id),
  },
};
