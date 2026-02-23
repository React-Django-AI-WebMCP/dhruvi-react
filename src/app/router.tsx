import { JSX, lazy, Suspense } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import { MainLayout } from '@/components/layout/MainLayout';
import { RouteErrorBoundary } from '@/components/common/RouteErrorBoundary';
import { ROUTES } from '@/constants/routes';

const HomePage = lazy(() => import('@/pages/Home').then((m) => ({ default: m.HomePage })));
const NotFoundPage = lazy(() =>
  import('@/pages/NotFound').then((m) => ({ default: m.NotFoundPage }))
);

function PageFallback(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-primary">
      <span className="text-t10_body_2 text-text-secondary">Loading…</span>
    </div>
  );
}

const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageFallback />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
