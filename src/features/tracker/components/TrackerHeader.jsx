export default function TrackerHeader({ challenge }) {
  const progress = (challenge.completed_days / 100) * 100

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm space-y-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">100 Day Challenge</h1>
        <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
      </div>

      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="bg-green-600 h-2 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
