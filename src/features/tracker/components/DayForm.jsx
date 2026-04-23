import { supabase } from "@/lib/supabase"
import { useState } from "react"

const DayForm = ({ day }) => {
  const [form, setForm] = useState(day)
  const inputStyle =
    "w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"

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
      <input
        name="weight"
        className={inputStyle}
        placeholder="Weight"
        onChange={handleChange}
      />
      <input
        name="calories"
        className={inputStyle}
        placeholder="Calories"
        onChange={handleChange}
      />
      <input
        name="protein"
        className={inputStyle}
        placeholder="Protein"
        onChange={handleChange}
      />
      <input
        name="steps"
        className={inputStyle}
        placeholder="Steps"
        onChange={handleChange}
      />

      <button className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700">
        Save
      </button>
    </div>
  )
}

export default DayForm
