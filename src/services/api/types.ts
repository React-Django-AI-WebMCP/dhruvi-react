import type { AxiosError } from 'axios';

/**
 * Normalized API error shape. Response interceptor maps all failures to this.
 */
export interface ApiError {
  message: string;
  statusCode: number;
  code?: string;
  errors?: Record<string, string[]>;
}

/**
 * Standard success response wrapper from backend.
 */
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

/**
 * Type guard for ApiError.
 */
export function isApiError(value: unknown): value is ApiError {
  return typeof value === 'object' && value !== null && 'message' in value && 'statusCode' in value;
}

/**
 * Extract ApiError from Axios error response.
 */
export function normalizeAxiosError(
  error: AxiosError<{ message?: string; code?: string; errors?: Record<string, string[]> }>
): ApiError {
  const statusCode = error.response?.status ?? 0;
  const data = error.response?.data;
  return {
    message: data?.message ?? error.message ?? 'An unexpected error occurred',
    statusCode,
    code: data?.code,
    errors: data?.errors,
  };
}

/** Example DTO: user list item */
export interface UserDto {
  id: string;
  name: string;
  email: string;
}

/** Example DTO: create user request */
export interface CreateUserDto {
  name: string;
  email: string;
}
