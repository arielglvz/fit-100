import { cn } from "@/lib/cn"
import React from "react"

export const SetttingsItem = ({
  icon: Icon,
  label,
  linkIcon: Link,
  className,
}) => {
  return (
    <div
      className={cn("w-full py-4 flex items-center justify-between", className)}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon size={18} className="text-muted" />}
        <span className="text-sm font-semibold text-label text-nowrap">
          {label}
        </span>
      </div>
      {Link && <Link size={18} className="text-muted" />}
    </div>
  )
}
