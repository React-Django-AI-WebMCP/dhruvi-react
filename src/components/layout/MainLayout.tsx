import { Outlet } from 'react-router-dom';

export function MainLayout(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col bg-background-primary">
      <header className="border-b border-border-primary bg-background-secondary px-6 py-4">
        <h1 className="text-t2_heading2 font-semibold text-text-primary">Dhruvi React</h1>
      </header>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
