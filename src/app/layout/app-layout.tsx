import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-indigo-50">
      <main>
        <Outlet />
      </main>
    </div>
  );
};
