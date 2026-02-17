import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import ActivityPage from "../pages/ActivityPage";
import UberWalletPage from "../pages/UberWalletPage";
import Rider from "../pages/Rider";
import Business from "../pages/Business";
import LoginForm from "../components/LoginForm";
import HelpPage from "../pages/HelpPage";
import LanguageSelect from "../components/LanguageSelect";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "ride",
        element: <Rider />,
      },
      {
        path: "business",
        element: <Business />,
      },
      {
        path: "en",
        element: <LanguageSelect />,
      },
      {
        path: "help",
        element: <HelpPage />,
      },
      {
        path: "wallet",
        element: <UberWalletPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginForm /> },
      { path: "signup", element: <LoginForm /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
