export const getProgressColor = (progress) => {
  if (progress === 0) return "#EBEDF0"
  if (progress < 50) return "#9BE9A8"
  if (progress < 100) return "#40C463"
  return "#216E39"
}
