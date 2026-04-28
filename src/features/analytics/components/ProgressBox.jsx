import { Bento } from "@/components/ui/Bento"
import ProgressBar from "@/components/ui/ProgressBar"
import { getPercentage } from "@/utils/math"

const ProgressBox = ({ label, part, whole, decimal }) => {
  const percent = getPercentage(part, whole, decimal)

  return (
    <Bento className="w-full min-w-40.75 h-32 flex flex-col justify-between rounded-md">
      <h3 className="text-h3">{label}</h3>
      <div className="">
        <p className="">{part}g</p>
        <ProgressBar percentage={percent} />
      </div>
    </Bento>
  )
}

export default ProgressBox
