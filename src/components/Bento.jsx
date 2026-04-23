import { cn } from "@/lib/cn"
import React from "react"

const Bento = ({ children, className }) => {
  return (
    <div
      className={cn(
        "h-max p-2 border-2 border-foreground-light rounded-md bg-primary-foreground",
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Bento
