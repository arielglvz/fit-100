// import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function AuthGuard({ children }) {
  const isAuthenticated = true
  // const auth = useSelector((state) => state.auth)

  // const user = auth?.user
  // const loading = auth?.loading

  // ⏳ optional loading state (prevents flicker)
  // if (loading) return null

  // 🔐 not authenticated
  // if (!user) {
  //   return <Navigate to="/auth/login" replace />
  // }

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />
  }

  return children
}
