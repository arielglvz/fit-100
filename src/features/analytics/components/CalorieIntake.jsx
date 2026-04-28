import { Bento } from "@/components/ui/Bento"
import { Calendar } from "lucide-react"
import React from "react"
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts"

// sample data
const data = [
  { name: "Mon", uv: 2100 },
  { name: "Tue", uv: 1800 },
  { name: "Wed", uv: 2400 },
  { name: "Thu", uv: 2000 },
  { name: "Fri", uv: 2600 },
  { name: "Sat", uv: 2300 },
  { name: "Sun", uv: 2200 },
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-border rounded-lg px-3 py-2 shadow-sm">
        <p className="text-xs text-foreground-muted">
          {payload[0].payload.name}
        </p>
        <p className="text-sm font-semibold text-header">
          {payload[0].value} kcal
        </p>
      </div>
    )
  }
  return null
}

const CalorieIntake = () => {
  const firstLabel = data[0].name
  const lastLabel = data[data.length - 1].name

  return (
    <div>
      <Bento className="rounded-xl">
        {/* Header */}
        <div className="flex items-start justify-between mb-1">
          <div>
            <h2 className="text-[15px] font-semibold text-header tracking-tight">
              Calorie Intake
            </h2>
            <p className="text-[13px] text-foreground-muted mt-0.5">
              Average 2,140 kcal
            </p>
          </div>

          <Bento className="p-1 w-max border border-border-light rounded-md">
            <Calendar size={20} className="text-muted" />
          </Bento>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-4" />

        {/* Chart */}
        <div className="relative" style={{ height: 140 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 8, right: 0, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="name" hide />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Bar dataKey="uv" fill="#40C463" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* X labels (minimal like WeightTrends) */}
        <div className="flex justify-between mt-1 mb-4">
          <span className="text-[11px] text-muted">{firstLabel}</span>
          <span className="text-[11px] text-muted">{lastLabel}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-4" />

        <div className="flex items-center justify-between">
          <div className="text-left">
            <p className="text-small font-semibold text-label">NET INTAKE</p>
            <p className="text-body font-bold text-foreground">
              14,980 <span className="text-small font-light">kcal</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-small font-semibold text-label">NET INTAKE</p>
            <p className="text-body font-bold text-foreground">
              2,200 <span className="text-small font-light">kcal</span>
            </p>
          </div>
        </div>
      </Bento>
    </div>
  )
}

export default CalorieIntake
