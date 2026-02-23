import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

export const NotFoundPage = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <h2 className="text-t2_heading2 font-semibold text-text-primary">Page not found</h2>
      <p className="text-t10_body_2 text-text-secondary">
        The page you are looking for does not exist.
      </p>
      <Link
        to={ROUTES.HOME}
        className="rounded-md bg-background-brand px-4 py-2 text-t10_body_2 font-medium text-white hover:opacity-90"
      >
        Go home
      </Link>
    </div>
  );
};
