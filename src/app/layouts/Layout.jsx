import { useState } from "react"
import Sidebar from "../../components/ui/Sidebar"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-4 space-y-4">
          <p className="font-bold text-lg">Menu</p>
          <nav className="flex flex-col gap-2">
            <a className="hover:bg-gray-100 p-2 rounded">Dashboard</a>
            <a className="hover:bg-gray-100 p-2 rounded">Profile</a>
          </nav>
        </div>
      </Sidebar>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="h-14 flex items-center px-4 border-b">
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            ☰
          </button>
        </div>

        <main className="flex-1 p-4 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

export default Layout
