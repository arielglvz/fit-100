import { supabase } from "@/lib/supabase"

export const loginUser = async (email, password) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
    ss,
  })
}

export const registerUser = async (email, password) => {
  return await auth.signUp({
    email,
    password,
  })
}

export const logoutUser = async () => {
  return await supabase.signOut()
}
