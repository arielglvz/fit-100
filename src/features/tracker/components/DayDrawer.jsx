import { Drawer } from "@mui/material/Drawer"
import DayForm from "./DayForm"

export default function DayDrawer({ open, onClose, day }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div className="w-[380px] p-6 space-y-4">
        <h2 className="text-lg font-semibold">Day {day?.day_number}</h2>

        <DayForm day={day} />
      </div>
    </Drawer>
  )
}
