import React from "react"

export default function DayCell({ day, onClick }) {
  const getColor = () => {
    if (!day.completed) return "bg-gray-200"
    if (day.completed && day.weight && day.protein) return "bg-green-700"

    return "bg-green-300"
  }
  return (
    <div
      onClick={() => onClick(day)}
      className={`w-6 h-6 rounded cursor-pointer ${getColor()}`}
    />
  )
}
