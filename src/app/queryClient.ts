import { QueryClient } from '@tanstack/react-query';

import { handleApiError } from '@/utils/errorHandler';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 1,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: (error) => {
        const message = handleApiError(error);
        if (typeof window !== 'undefined' && window.dispatchEvent) {
          window.dispatchEvent(new CustomEvent('app:error', { detail: { message } }));
        }
      },
    },
  },
});
