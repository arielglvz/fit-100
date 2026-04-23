import { cn } from "@/lib/cn"

const CustomButton = ({
  className,
  label,
  children,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(
        "flex justify-center items-center min-w-65 min-h-[49.19px] bg-primary text-white",
        className,
      )}
      {...props}
    >
      {children || label}
    </button>
  )
}

export default CustomButton
