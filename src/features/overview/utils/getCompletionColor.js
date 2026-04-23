export function getCompletionColor(day) {
  const fields = [
    day.weight,
    day.calories,
    day.protein,
    day.steps,
    day.water,
    day.workout,
  ]

  const filled = fields.filter(
    (value) => value !== null && value !== undefined,
  ).length

  const percent = (filled / fields.length) * 100

  if (percent === 0) return "#EBEDF0"
  if (percent < 50) return "#9BE9A8"
  if (percent < 100) return "#40C463"
  return "#216E39"
}
