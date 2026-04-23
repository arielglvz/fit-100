export function groupByWeek(activities) {
  const weeksMap = new Map()

  activities.forEach((day) => {
    const week = day.week_number

    if (!weeksMap.has(week)) {
      weeksMap.set(week, [])
    }

    weeksMap.get(week).push(day)
  })

  // Convert to sorted array
  return Array.from(weeksMap.entries())
    .sort((a, b) => a[0] - b[0]) // sort by week number
    .map(([week, days]) => ({
      week,
      days: days.sort((a, b) => a.day_number - b.day_number),
    }))
}
