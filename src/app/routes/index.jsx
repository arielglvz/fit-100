import { useLocation, useParams, useRoutes } from "react-router-dom"

// Layouts
import AuthLayout from "@/app/layouts/AuthLayout"
import MainLayout from "@/app/layouts/MainLayout"

// Guards
import AuthGuard from "@/app/guards/AuthGuard"

// pages
import Analytics from "@/pages/analytics"
import Login from "@/pages/login"
import Overview from "@/pages/overview"
import Signup from "@/pages/signup"

export default function AppRoutes() {
  return useRoutes([
    // AUTH AREA
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
      ],
    },

    // DASHBOARD AREA
    {
      path: "/",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        { path: "", element: <Overview /> }, // default page
        { path: "overview", element: <Overview /> },
        { path: "analytics", element: <Analytics /> },
      ],
    },
  ])
}
