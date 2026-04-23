import { useEffect, useState } from "react"

const DailyProgress = ({ progress }) => {
  const [dailyProgress, setDailyProgress] = useState(0)

  useEffect(() => {
    setDailyProgress(progress)
  }, [progress])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="leading-snug">
          <p className="text-small font-semibold text-label uppercase">
            Daily Summary
          </p>
          <p className="text-foreground font-semibold text-title">Tuesday</p>
        </div>
        <div className="leading-none">
          <p className="font-bold text-[40px] text-foreground">68%</p>
          <p className="text-small font-semibold text-label text-right uppercase">
            complete
          </p>
        </div>
      </div>
      <div className="h-2.5 w-full bg-surface-progress overflow-hidden rounded-full shadow">
        <div
          className="h-full bg-foreground transition-all duration-500 ease-out"
          style={{ width: `${dailyProgress}%` }}
        />
      </div>
    </div>
  )
}

export default DailyProgress
