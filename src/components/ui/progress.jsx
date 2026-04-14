import React from "react"
import { cn } from "../../lib/utils"

export function Progress({ value, className, indicatorClassName, ...props }) {
  return (
    <div
      className={cn("relative w-full h-3 bg-secondary rounded-full overflow-hidden", className)}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      {...props}
    >
      <div
        className={cn(
          "h-full w-full flex-1 bg-primary transition-all duration-500 ease-in-out",
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  )
}