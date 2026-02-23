import type { ApiError } from '@/services/api/types';

/**
 * Returns a user-facing error message from an API error or unknown error.
 */
export function handleApiError(error: unknown): string {
  if (error && typeof error === 'object' && 'message' in error && 'statusCode' in error) {
    const apiError = error as ApiError;
    if (apiError.errors && Object.keys(apiError.errors).length > 0) {
      const firstKey = Object.keys(apiError.errors)[0];
      const messages = apiError.errors[firstKey];
      return Array.isArray(messages) ? (messages[0] ?? apiError.message) : apiError.message;
    }
    return apiError.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
}
