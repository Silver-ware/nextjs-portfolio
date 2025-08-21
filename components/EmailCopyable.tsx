import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function CopyEmail({ email }: { email: string }) {
  const [open, setOpen] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setOpen(true)

      setTimeout(() => setOpen(false), 1500)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <TooltipProvider>
      <Tooltip open={open}>
        <TooltipTrigger asChild>
          <span
            onClick={handleCopy}
            className="cursor-pointer w-fit font-quantico font-bold text-foreground lg:text-xl text-base tracking-[0] leading-[normal]"
          >
            {email}
          </span>
        </TooltipTrigger>
        <TooltipContent align="center" side="bottom">
          <div className="px-3 py-1 mt-2 font-quantico backdrop-blur-xs lg:text-base text-sm rounded text-foreground bg-semi-transparent border border-primary-outline">
            Copied!
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
