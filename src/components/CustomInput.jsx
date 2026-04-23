import { cn } from "@/lib/cn"
import { Eye, EyeClosed } from "lucide-react"
import { useState } from "react"

export const CustomInput = ({
  className,
  label,
  name,
  error,
  id,
  type = "text",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col gap-1 space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-bold tracking-wide uppercase text-secondary"
        >
          {label}
        </label>
      )}

      {type !== "password" ? (
        <input
          id={id}
          {...props}
          className={cn(
            `w-full px-5 py-2 border rounded-md focus:outline-none bg-foreground-light/20 ${
              error ? "border-red-500" : "border-gray-300 focus:border-black"
            }`,
            className,
          )}
        />
      ) : (
        <div
          className={`px-5 py-2 flex items-center justify-between border rounded-md bg-foreground-light/20 focus-within:outline focus-within:outline-black ${
            error ? "border-red-500" : "border-gray-300 focus:border-black"
          }`}
        >
          <input
            id={id}
            {...props}
            className={cn("outline-none bg-transparent", className)}
            type={isOpen ? "text" : "password"}
          />
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="duration-300 ease-in-out text-normal"
          >
            {isOpen ? <Eye /> : <EyeClosed />}
          </div>
        </div>
      )}

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
