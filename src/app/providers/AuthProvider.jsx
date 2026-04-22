import { setLoading, setUser } from "@/features/auth/authSlice"
import { supabase } from "@/lib/supabase"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function AuthProvider({ children }) {
  const dispatch = useDispatch()

  useEffect(() => {
    const getUser = async () => {
      dispatch(setLoading(true))

      const { data } = await supabase.auth.getUser()

      dispatch(setUser(data?.user ?? null))
    }

    getUser()

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        dispatch(setUser(session?.user ?? null))
      },
    )

    return () => listener.subscription.unsubscribe()
  }, [dispatch])

  return children
}
