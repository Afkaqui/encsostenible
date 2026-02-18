import * as React from "react"
import { cn } from "@/src/lib/utils"

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }