import { Toaster } from "@/shared/ui/sonner";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <main>
        <Outlet />
        <Toaster position="top-center" duration={3000} />
      </main>
    </div>
  );
};
