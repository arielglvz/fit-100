import DayCell from "@/features/tracker/components/DayCell"

export default function TrackerGrid({ activities, onSelect }) {
  return (
    <div className="grid grid-cols gap-2">
      {activities.map((day) => (
        <DayCell key={day.id} day={day} onClick={onSelect} />
      ))}
    </div>
  )
}
