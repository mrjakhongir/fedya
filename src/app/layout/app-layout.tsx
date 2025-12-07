import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <main>
        <Outlet />
      </main>
    </div>
  );
};
