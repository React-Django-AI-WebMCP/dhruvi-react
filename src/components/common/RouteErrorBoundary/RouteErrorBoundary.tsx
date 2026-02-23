import { type Component, type ErrorInfo, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface RouteErrorBoundaryProps {
  children?: ReactNode;
  className?: string;
}

interface RouteErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class RouteErrorBoundary extends Component<
  RouteErrorBoundaryProps,
  RouteErrorBoundaryState
> {
  constructor(props: RouteErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): RouteErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (import.meta.env.DEV) {
      console.error('RouteErrorBoundary caught an error', error, errorInfo);
    }
  }

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      return (
        <div
          className={cn(
            'flex min-h-screen flex-col items-center justify-center gap-4 p-8',
            this.props.className
          )}
          role="alert"
        >
          <h1 className="text-t2_heading2 font-semibold text-text-primary">Something went wrong</h1>
          <p className="text-t10_body_2 text-text-secondary">{this.state.error.message}</p>
        </div>
      );
    }
    return this.props.children ?? null;
  }
}
