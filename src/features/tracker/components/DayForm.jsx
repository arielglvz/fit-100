import { supabase } from "@/lib/supabase"
import { useState } from "react"

const DayForm = ({ day }) => {
  const [form, setForm] = useState(day)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.value]: e.target.value })
  }

  const handleSave = async () => {
    await supabase.from("activities").upsert({
      ...form,
      completed: true,
    })
  }

  return (
    <div className="space-y-3">
      <input name="weight" placeholder="Weight" onChange={handleChange} />
      <input name="calories" placeholder="Calories" onChange={handleChange} />
      <input name="protein" placeholder="Protein" onChange={handleChange} />
      <input name="steps" placeholder="Steps" onChange={handleChange} />

      <button onClick={handleSave} className="bg-green-500 text-white p-2">
        Save
      </button>
    </div>
  )
}

export default DayForm
