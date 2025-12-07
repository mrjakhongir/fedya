import HomePage from "@/pages/home/ui/home-page";
import TestsPage from "@/pages/tests/ui/tests-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../layout/app-layout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/tests",
        element: <TestsPage />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
