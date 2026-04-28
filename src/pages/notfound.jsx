import React from "react"

const NotFoundPage = () => {
  return (
    <div className="py-3 flex h-screen bg-gray-50">
      <div className="p-5 flex-1 overflow-y-auto space-y-6">
        <div className="flex justify-center items-center">
          <span className="text-h3 text-error font-bold">
            Error 404: Page not found.
          </span>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
