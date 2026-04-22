import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function AuthGuards({ children }) {
  const { user, loading } = useSelector((state) => state.auth)

  if (loading) return <div className="">Loading...</div>

  if (!user) return <Navigate to="/login" replace />

  return children
} 
