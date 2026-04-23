export default function WeeklySummary() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-3">Weekly Summary</h3>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-500">Avg Weight</p>
          <p className="font-semibold">70kg</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Calories</p>
          <p className="font-semibold">2200</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Protein</p>
          <p className="font-semibold">150g</p>
        </div>
      </div>
    </div>
  )
}
