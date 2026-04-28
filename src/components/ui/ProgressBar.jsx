const ProgressBar = ({ percentage }) => {
  return (
    <div className="h-2.5 w-full bg-surface-progress overflow-hidden rounded-full shadow">
      <div
        className="h-full transition-all duration-500 ease-out bg-[#40C463]"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export default ProgressBar
