import { groupByWeek } from "../utils/groupByWeek"
import { getCompletionColor } from "../utils/getCompletionColor"
import Bento from "@/components/Bento"
import { activity_legend } from "@/features/overview/data"

export default function WeeklyGrid({ activities, onSelect }) {
  const weeks = groupByWeek(activities)

  return (
    <Bento className="bg-white p-4 space-y-2">
      <div className="flex items-center justify-between">
        <div className="w-max flex items-center justify-between gap-2">
          {activity_legend.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div
                className="w-2 h-2 border-muted rounde-sm"
                style={{ backgroundColor: item.color }}
              />
              <p className="text-small text-label">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="text-small font-semibold text-label">MON-SUN</p>
      </div>
      {weeks.map((week) => (
        <div key={week.week} className="flex items-center gap-4">
          {/* Week Label */}
          <div className="max-w-12 text-sm font-semibold text-primary text-nowrap">
            Week {week.week}
          </div>

          {/* Days */}
          <div className="w-full flex justify-around gap-1">
            {week.days.map((day) => (
              <div
                key={day.id}
                onClick={() => onSelect(day)}
                className="w-6 h-6 rounded-xs cursor-pointer transition-all hover:scale-110 hover:ring-2 hover:ring-green-400"
                style={{
                  backgroundColor: getCompletionColor(day),
                }}
                title={`Day ${day.day_number}`}
              />
            ))}
          </div>
        </div>
      ))}
    </Bento>
  )
}
