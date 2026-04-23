import { Dumbbell, Mars, Scale, TrendingDown, Venus } from "lucide-react"

export const gender = [
  { id: "male", label: "Male", icon: Mars },
  { id: "female", label: "Female", icon: Venus },
]

export const objectives = [
  {
    id: "cut",
    label: "Cutting",
    subtext: "Caloric deficit for dat loss",
    icon: TrendingDown,
  },
  {
    id: "bulk",
    label: "Bulking",
    subtext: "Caloric surplus for muscle growth",
    icon: Dumbbell,
  },
  {
    id: "maintain",
    label: "Maintenance",
    subtext: "Stable energy and recovery focus",
    icon: Scale,
  },
]

export const activities = [
  {
    id: 0,
    label: "sedentary",
    desc: "Mostly office work with 1-2 hours of low intensity movement weekly.",
    val: 1.2,
  },
  {
    id: 1,
    label: "active",
    desc: "Standing or walking for most of the day, with 3-5 hours of moderate exercise weekly.",
    val: 1.375,
  },
  {
    id: 2,
    label: "intense",
    desc: "Physically demanding lifestyle with 6+ hours of high-intensity training weekly.",
    val: 1.55,
  },
  {
    id: 3,
    label: "athlete",
    desc: "Professional-level physical output with multiple daily training sessions and high metabolic demand.",
    val: 1.725,
  },
]
