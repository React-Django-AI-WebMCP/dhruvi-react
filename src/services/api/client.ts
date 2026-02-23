import axios, { type AxiosError } from 'axios';

import { env } from '@/config/env';
import { logger } from '@/services/logger';
import { isApiError, normalizeAxiosError, type ApiError } from '@/services/api/types';

const AUTH_TOKEN_KEY = 'auth_token';

function getAuthToken(): string | null {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function clearAuthToken(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export const apiClient = axios.create({
  baseURL: env.API_BASE_URL || undefined,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (import.meta.env.DEV) {
      logger.debug('API request', { method: config.method, url: config.url });
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => {
    if (import.meta.env.DEV) {
      logger.debug('API response', { status: response.status, url: response.config.url });
    }
    return response;
  },
  (error: AxiosError) => {
    const apiError: ApiError = normalizeAxiosError(error);
    if (import.meta.env.DEV) {
      logger.error('API error', { statusCode: apiError.statusCode, message: apiError.message });
    }
    if (apiError.statusCode === 401 || apiError.statusCode === 403) {
      clearAuthToken();
    }
    return Promise.reject(apiError);
  }
);

export type { ApiError };
export { isApiError };
