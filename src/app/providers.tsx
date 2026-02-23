import { JSX, Suspense } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
// Remove import of ReactQueryDevtools to fix "Cannot find module" error
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import { queryClient } from '@/app/queryClient';
import { router } from '@/app/router';

function RouterFallback(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-primary">
      <span className="text-t10_body_2 text-text-secondary">Loading…</span>
    </div>
  );
}

export function AppProviders(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<RouterFallback />}>
        <RouterProvider router={router} />
      </Suspense>
      <Toaster position="top-right" richColors />
      {/* Removed ReactQueryDevtools usage to fix "Cannot find name 'ReactQueryDevtools'" error */}
    </QueryClientProvider>
  );
}
