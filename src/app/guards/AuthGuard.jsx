// import { useSelector } from "react-redux"
import { supabase } from "@/lib/supabase"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

export default function AuthGuard({ children }) {
  const [session, setSession] = useState(undefined)

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      setSession(data.session)
    }

    getSession()

    // When something change in user's auth it calls this function
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
      },
    )

    return () => listener.subscription.unsubscribe()
  }, [])

  // Checkingg
  if (session === undefined) return <p>Loading...</p>

  // If no credentials
  if (!session) return <Navigate to="/auth/login" replace />

  return children
}
