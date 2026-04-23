import AuthGuard from "@/app/guards/AuthGuard"
import MainLayout from "@/app/layouts/MainLayout"
import TrackerTable from "@/features/tracker/Tracker"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/tracker"
          element={
            <AuthGuard>
              <MainLayout>
                <TrackerTable />
              </MainLayout>
            </AuthGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
