import { Bento } from "@/components/ui/Bento"
import { cn } from "@/lib/cn"

export const SettingsSection = ({ label, children, className }) => {
  return (
    <div className={cn("w-full space-y-2", className)}>
      <h3 className="text-h3 text-label uppercase">{label}</h3>
      <Bento className="py-0 rounded-md border border-border-light">
        <div className="">{children}</div>
      </Bento>
    </div>
  )
}
