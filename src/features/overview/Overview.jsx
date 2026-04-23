import MainLayout from "@/app/layouts/MainLayout"
import DailyProgress from "@/features/overview/components/DailyProgress"
import DayStreak from "@/features/overview/components/DayStreak"
import TodaysProtocol from "@/features/overview/components/TodaysProtocol"
import TrackerTable from "@/features/tracker/Tracker"

const Overview = () => {
  return (
    <MainLayout>
      <div className="p-4 space-y-6">
        <DailyProgress progress={30} />
        <DayStreak />
        <TrackerTable />
        <TodaysProtocol />
      </div>
    </MainLayout>
  )
}

export default Overview
