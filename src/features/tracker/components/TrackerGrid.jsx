import clsx from "clsx"

export default function DayCell({ day, onClick }) {
  const intensity = () => {
    if (!day.completed) return "bg-gray-200"
    if (day.completed && !day.weight) return "bg-green-300"
    return "bg-green-600"
  }

  return (
    <div
      onClick={() => onClick(day)}
      className={clsx(
        "w-6 h-6 rounded-sm cursor-pointer transition-all",
        "hover:scale-110 hover:ring-2 hover:ring-green-400",
        intensity(),
      )}
      title={`Day ${day.day_number}`}
    />
  )
}
