export const getPercentage = (part, whole, decimal = 2) => {
  if (whole === 0) return 0
  return Number(((part / whole) * 100).toFixed(decimal))
}
