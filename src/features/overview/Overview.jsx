import MainLayout from "@/app/layouts/MainLayout"
import DailyProgress from "@/features/overview/components/DailyProgress"
import DayStreak from "@/features/overview/components/DayStreak"
import TrackerTable from "@/features/tracker/Tracker"

const Overview = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* daily summary */}
        <DailyProgress progress={30} />
        {/* Daily Streak */}
        <DayStreak />
        {/* Consistency tracker */}
        <TrackerTable  />
      </div>
    </MainLayout>
  )
}

export default Overview
