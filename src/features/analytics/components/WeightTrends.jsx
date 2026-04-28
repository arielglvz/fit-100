import { Bento } from "@/components/ui/Bento"
import { useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  ReferenceLine,
} from "recharts"

const dataMap = {
  "1W": [
    { label: "W1", weight: 80.2 },
    { label: "W2", weight: 79.8 },
    { label: "W3", weight: 79.1 },
    { label: "W4", weight: 78.5 },
  ],
  "3W": [
    { label: "Jan 01", weight: 76.0 },
    { label: "Jan 02", weight: 75.4 },
    { label: "Jan 03", weight: 75.9 },
    { label: "Jan 04", weight: 76.5 },
    { label: "Feb 01", weight: 76.2 },
    { label: "Feb 02", weight: 77.1 },
    { label: "Feb 03", weight: 77.0 },
    { label: "Feb 04", weight: 77.8 },
    { label: "Mar 01", weight: 77.5 },
    { label: "Mar 02", weight: 78.0 },
    { label: "Mar 03", weight: 78.3 },
    { label: "Mar 04", weight: 78.5 },
  ],
  "6W": [
    { label: "Oct", weight: 73.2 },
    { label: "Nov", weight: 74.0 },
    { label: "Dec", weight: 75.1 },
    { label: "Jan", weight: 76.0 },
    { label: "Feb", weight: 77.1 },
    { label: "Mar", weight: 78.5 },
  ],
  "1M": [
    { label: "Apr", weight: 72.0 },
    { label: "May", weight: 72.5 },
    { label: "Jun", weight: 73.0 },
    { label: "Jul", weight: 73.8 },
    { label: "Aug", weight: 74.5 },
    { label: "Sep", weight: 74.2 },
    { label: "Oct", weight: 75.1 },
    { label: "Nov", weight: 76.0 },
    { label: "Dec", weight: 76.8 },
    { label: "Jan", weight: 77.2 },
    { label: "Feb", weight: 77.9 },
    { label: "Mar", weight: 78.5 },
  ],
}

const tabs = [
  { key: "1W", label: "1", sub: "WEEK" },
  { key: "3W", label: "3", sub: "WEEKS" },
  { key: "6W", label: "6", sub: "WEEKS" },
  { key: "1M", label: "1", sub: "MONTH" },
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-border rounded-lg px-3 py-2 shadow-sm">
        <p className="text-xs text-foreground-muted">
          {payload[0].payload.label}
        </p>
        <p className="text-sm font-semibold text-header">
          {payload[0].value} kg
        </p>
      </div>
    )
  }
  return null
}

export default function WeightTrends() {
  const [activeTab, setActiveTab] = useState("3W")
  const data = dataMap[activeTab]
  const currentWeight = 78.5
  const diff = -2.4
  //
  const weights = data.map((d) => d.weight)
  const minW = Math.floor(Math.min(...weights)) - 1
  const maxW = Math.ceil(Math.max(...weights)) + 1

  const firstLabel = data[0].label
  const lastLabel = data[data.length - 1].label

  return (
    <div>
      <Bento className="rounded-xl">
        {/* Header */}
        <div className="flex items-start justify-between mb-1">
          <div>
            <h2 className="text-[15px] font-semibold text-header tracking-tight">
              Weight Trends
            </h2>
            {/* TODO: Add function that if
              "bulk": number up (green) number down (red)
              "cut": number up (red) number down (green)
              "maintain":  number up (red) number down (red) maintain green
            */}
            <p className="text-[13px] text-foreground-muted mt-0.5">
              {diff > 0 ? "+" : ""}
              {diff}kg this month
            </p>
          </div>
          <div className="text-right">
            <p
              className="text-h1 font-bold text-[#40C463] leading-none"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {currentWeight}
            </p>
            <p className="text-[10px] font-semibold tracking-widest text-foreground-muted mt-1 uppercase">
              Current KG
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-4" />
        {/* Chart */}
        <div className="relative" style={{ height: 140 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 8, right: 8, left: -32, bottom: 0 }}
            >
              <YAxis domain={[minW, maxW]} hide />
              <XAxis dataKey="label" hide />
              <ReferenceLine
                y={minW + (maxW - minW) * 0.4}
                stroke="#e5e5e5"
                strokeDasharray="0"
                strokeWidth={1}
              />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#40C463"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 4,
                  fill: "#18181b",
                  strokeWidth: 0,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* X-axis labels */}
        <div className="flex justify-between px-0 mt-1 mb-4">
          <span className="text-[11px] text-muted">{firstLabel}</span>
          <span className="text-[11px] text-muted">{lastLabel}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-4" />

        {/* Tabs */}
        <div className="flex justify-around">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="flex flex-col items-center gap-0.5 px-2 py-1 group"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  className={`text-[15px] leading-none transition-colors ${
                    isActive
                      ? "font-bold text-header"
                      : "font-normal text-muted"
                  }`}
                >
                  {tab.label}
                </span>
                <span
                  className={`text-[10px] tracking-wider uppercase transition-colors ${
                    isActive
                      ? "font-bold text-header"
                      : "font-normal text-muted"
                  }`}
                >
                  {tab.sub}
                </span>
                <div
                  className={`h-0.5 w-full rounded-full mt-0.5 transition-all ${
                    isActive ? "bg-header" : "bg-transparent"
                  }`}
                />
              </button>
            )
          })}
        </div>
      </Bento>
    </div>
  )
}
