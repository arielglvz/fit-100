import {
  CalendarClock,
  ChevronRight,
  CircleGauge,
  CircleQuestionMark,
  FileText,
  Flag,
  LockKeyhole,
  Mail,
  MessageSquare,
  Moon,
  SquareArrowOutUpRight,
  Target,
  Weight,
} from "lucide-react"

export const settingsConfig = [
  {
    title: "Personal Data",
    items: [
      {
        label: "Goal",
        icon: Flag,
        name: "goal",
      },
      {
        label: "Age",
        icon: CalendarClock,
        name: "age",
      },
      {
        label: "Start Weight",
        icon: Weight,
        name: "start_weight",
      },
      {
        label: "Target Calories",
        icon: Target,
        name: "target_calories",
      },
      {
        label: "Target Protein",
        icon: Target,
        name: "protein_target",
      },
      {
        label: "Activity Level",
        icon: CircleGauge,
        name: "activity_level",
      },
    ],
  },
  {
    title: "Account & Security",
    items: [
      {
        label: "Password & Security",
        icon: LockKeyhole,
        linkIcon: SquareArrowOutUpRight,
      },
      {
        label: "Email Notification",
        icon: Mail,
        linkIcon: ChevronRight,
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        label: "Help & FAQ",
        icon: CircleQuestionMark,
        linkIcon: ChevronRight,
      },
      {
        label: "Contact Support",
        icon: MessageSquare,
        linkIcon: ChevronRight,
      },
      {
        label: "Privacy Policy",
        icon: FileText,
        linkIcon: ChevronRight,
      },
    ],
  },
]
