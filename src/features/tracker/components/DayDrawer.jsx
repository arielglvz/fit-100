import DayForm from "@/features/tracker/components/DayForm"
import { Drawer } from "node_modules/@mui/material"

const DayDrawer = () => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div className="w-[350px] p-4">
        <DayForm day={day} />
      </div>
    </Drawer>
  )
}

export default DayDrawer
