import { useState } from "react"
import { cn } from "@/lib/cn"
import { Minimize2, PanelTopOpen } from "lucide-react"

const Sidebar = ({ isOpen, onClose }) => {
  const [collapsed, setCollapsed] = useState(false)

  const navItems = [
    { label: "Dashboard", icon: "🏠" },
    { label: "Tracker", icon: "📊" },
    { label: "Goals", icon: "🎯" },
    { label: "Settings", icon: "⚙️" },
  ]

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-40 md:hidden transition",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:static top-0 left-0 h-full bg-white border-r z-50 transition-all duration-300",
          collapsed ? "w-16" : "w-64",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        {/* Header */}
        <div
          className={`h-14 flex items-center px-3 border-b ${collapsed ? "justify-center" : "justify-between"}`}
        >
          {!collapsed && (
            <p className="font-semibold text-sm tracking-wide">Performance</p>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-500 hover:text-black"
          >
            {collapsed ? <PanelTopOpen className="rotate-90" /> : <Minimize2 />}
          </button>
        </div>

        {/* Nav */}
        <nav className="p-2 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition",
                "hover:bg-gray-100",
              )}
            >
              <span className="text-lg">{item.icon}</span>

              {!collapsed && (
                <span className="text-gray-700">{item.label}</span>
              )}
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
