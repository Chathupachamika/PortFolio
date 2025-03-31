import React from "react"
import { cn } from "@/lib/utils"

export function Progress({ value, className, ...props }) {
  return (
    <div
      className={cn("relative w-full h-4 bg-gray-200 rounded overflow-hidden", className)}
      {...props}
    >
      <div
        className="absolute top-0 left-0 h-full bg-primary transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}
