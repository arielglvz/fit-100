import { cn } from "@/lib/cn"
import React from "react"

export const Bento = ({ children, className }) => {
  return (
    <div
      className={cn("bg-white rounded-3xl p-6 w-full max-w-sm", className)}
      style={{ boxShadow: "0 2px 24px 0 rgba(0,0,0,0.07)" }}
    >
      {children}
    </div>
  )
}
