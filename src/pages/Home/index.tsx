import { JSX } from 'react';

export const HomePage = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-t1_heading1 font-bold text-text-primary">Home</h2>
      <p className="text-t10_body_2 text-text-secondary">
        Production-ready React scaffold with Vite, TypeScript, Tailwind, React Query, and Axios.
      </p>
    </div>
  );
};
