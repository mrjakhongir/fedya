import HomePage from "@/pages/home/ui/home-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../layout/app-layout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
