import { supabase } from "@/lib/supabase"

// Login
export const sigin = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw error
  return data
}

// Register
export const signup = async ({ firstname, lastname, email, password }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      // emailRedirectTo: "http://localhost:5173",
      data: {
        firstname,
        lastname,
      },
    },
  })

  if (error) throw error
  return data
}

// Logout
export const logout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) throw error
}
