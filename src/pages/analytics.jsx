import CalorieIntakeChart from "@/features/analytics/components/CalorieIntake"
import ProgressBox from "@/features/analytics/components/ProgressBox"
import WeightTrends from "@/features/analytics/components/WeightTrends"

const Analytics = () => {
  return (
    <div className="space-y-6 p-4">
      <div className="space-y-2">
        <p className="text-body font-semibold text-label uppercase tracking-[2px]">
          ANALYTICS
        </p>
        <p className="text-small font-semibold text-foreground uppercase">
          Progress
        </p>
      </div>
      <WeightTrends />
      <CalorieIntakeChart />
      <div className="max-w-sm flex justify-between gap-4">
        <ProgressBox label="PROTEIN" part={32} whole={165} />
        <ProgressBox label="CARBS" part={210} whole={1500} />
      </div>
    </div>
  )
}

export default Analytics
