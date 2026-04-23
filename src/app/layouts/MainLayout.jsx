import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import { Menu } from "lucide-react"
import { cn } from "@/lib/cn"

export default function MainLayout({ background, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={cn("flex h-screen", background)}>
      <Sidebar isOpen={open} onClose={() => setOpen(false)} />

      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="h-14 flex items-center px-4 border-b border-b-muted bg-white">
          <button className="md:hidden text-xl" onClick={() => setOpen(true)}>
            <Menu />
          </button>

          <p className="ml-3 font-semibold">Performance</p>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-5xl">{children}</div>
        </main>
      </div>
    </div>
  )
}
