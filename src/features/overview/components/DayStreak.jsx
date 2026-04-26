import { Bento } from "@/components/ui/Bento"
import { ChevronRight, Zap } from "lucide-react"

const DayStreak = () => {
  return (
    <Bento className="p-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Bento className="w-max ">
          <Zap className="text-primary" />
        </Bento>
        <div className="">
          <p className="text-label font-semibold">12 Day Streak</p>
          <p className="text-small">Keep the momentum</p>
        </div>
      </div>
      <ChevronRight className="text-border-strong" />
    </Bento>
  )
}

export default DayStreak
