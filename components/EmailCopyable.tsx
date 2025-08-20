import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function CopyEmail({ email }: { email: string }) {
  const [open, setOpen] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setOpen(true)

      // setTimeout(() => setOpen(false), 1500)
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
            className="cursor-pointer w-fit font-quantico font-bold text-[#e2e2e2] lg:text-xl text-base tracking-[0] leading-[normal]"
          >
            {email}
          </span>
        </TooltipTrigger>
        <TooltipContent align="center" side="bottom">
          <div className="px-3 py-1 mt-2 font-quantico backdrop-blur-sm lg:text-base text-sm rounded text-[#e2e2e2] bg-[#52525226] border border-neutral-700">
            Copied!
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
