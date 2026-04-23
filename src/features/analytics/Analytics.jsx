import MainLayout from "@/app/layouts/MainLayout"
import Bento from "@/components/Bento"
import WeightTrends from "@/features/analytics/components/WeightTrends"

const Analytics = () => {
  return (
    <MainLayout background="bg-[#f0f0f0] ">
      <div className="space-y-6 p-4 ">
        <div className="space-y-2">
          <p className="text-body font-semibold text-label uppercase tracking-[2px]">
            ANALYTICS
          </p>
          <p className="text-small font-semibold text-foreground uppercase">
            Progress
          </p>
        </div>
        <WeightTrends />
      </div>
    </MainLayout>
  )
}

export default Analytics
