export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <main className="flex-1 overflow-auto p-4">{children}</main>
    </div>
  )
}
