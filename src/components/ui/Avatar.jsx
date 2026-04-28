import { cn } from "@/lib/cn"
import classNames from "classnames"
import React from "react"

const Avatar = ({ url, alt = "avatar", className }) => {
  return (
    <div className={cn("h-25  w-25 rounded-full overflow-hidden", className)}>
      <img src={url} alt={alt} />
    </div>
  )
}

export default Avatar
