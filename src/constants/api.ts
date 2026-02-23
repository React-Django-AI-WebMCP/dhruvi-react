/**
 * API path constants. Used by services/api/endpoints and for URL building.
 */
export const API_ENDPOINTS = {
  HEALTH: '/health',
  USERS: '/users',
  USER_DETAIL: (id: string) => `/users/${id}`,
} as const;
