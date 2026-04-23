import WeeklyGrid from "@/features/overview/components/WeeklyGrid"
import { mockActivities } from "@/features/overview/mockActivities"

export default function TrackerTable() {
  const handleSelect = (day) => {
    console.log("Clicked day:", day)
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-small font-semibold text-label uppercase">
          CONSISTENCY TRACKER
        </p>
        <p className="text-small font-normal text-label">100-Day View</p>
      </div>
      <WeeklyGrid activities={mockActivities} onSelect={handleSelect} />
    </div>
  )
}


  if (percent === 0) return "#EBEDF0"
  if (percent < 50) return "#9BE9A8"
  if (percent < 100) return "#40C463"