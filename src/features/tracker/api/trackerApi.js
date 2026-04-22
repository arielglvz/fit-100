import { supabase } from "@/lib/supabase"

export const getActivities = async (challengeId) => {
  return await supabase.from(
    "activities"
      .select("*")
      .eq("challenge_id", challengeId)
      .order("day_number"),
  )
}
