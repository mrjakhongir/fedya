import HomePage from "@/pages/home/ui/home-page";
import TestDetailsPage from "@/pages/test-details/ui/test-details-page";
import TestsPage from "@/pages/tests/ui/tests-page";
import { paths } from "@/shared/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../layout/app-layout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: paths.home, element: <HomePage /> },
      {
        path: paths.tests.root,
        element: <TestsPage />,
      },
      {
        path: paths.tests.detail,
        element: <TestDetailsPage />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
