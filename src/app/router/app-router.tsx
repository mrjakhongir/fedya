import CreateTestPage from "@/pages/create-test/ui/create-test-page";
import OnboradingPage from "@/pages/onbording/ui/onborading-page";
import TestDetailsPage from "@/pages/test-details/ui/test-details-page";
import TestPlaygroundPage from "@/pages/test-playground/ui/test-playground-page";
import TestsSearchPage from "@/pages/tests-search/ui/tests-search-page";
import TestsPage from "@/pages/tests/ui/tests-page";
import { paths } from "@/shared/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../layout/app-layout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      // {
      //   path: paths.home,
      //   element: <HomePage />,
      // },
      { path: paths.onboarding, element: <OnboradingPage /> },
      {
        path: paths.home,
        element: <TestsPage />,
      },
      {
        path: paths.tests.search,
        element: <TestsSearchPage />,
      },
      {
        path: paths.tests.create,
        element: <CreateTestPage />,
      },
      {
        path: paths.tests.detail,
        element: <TestDetailsPage />,
      },
      {
        path: paths.tests.playground,
        element: <TestPlaygroundPage />,
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
