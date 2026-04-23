import Bento from "@/components/Bento"
import { todays_protocol } from "@/features/overview/data"
import React from "react"

const TodaysProtocol = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-small font-semibold text-label uppercase">
          CONSISTENCY TRACKER
        </p>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 border-muted rounde-full bg-[#40C463]" />
          <p className="text-small text-label">Changes auto-saved</p>
        </div>
      </div>
      <div className="space-y-2">
        {todays_protocol.map((item) => {
          return (
            <Bento
              key={item}
              className="py-6 px-4 flex items-center justify-between rounded-md"
            >
              <p className="font-semibold text-foreground">{item.label}</p>
              <p className="text-small font-semibold text-foreground">
                {item.name} / {item.target}
              </p>
            </Bento>
          )
        })}
      </div>
    </div>
  )
}

export default TodaysProtocol
