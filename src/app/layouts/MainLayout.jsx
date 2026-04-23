import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import { Menu } from "lucide-react"

export default function MainLayout({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50">
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
        <main className="flex-1 overflow-y-auto p-4">
          <div className="max-w-5xl">{children}</div>
        </main>
      </div>
    </div>
  )
}
