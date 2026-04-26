import { Bento } from "@/components/ui/Bento"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { updateFormField } from "@/lib/helpers"
import { useState } from "react"

const fields = [
  {
    id: "first_name",
    label: "First Name",
    type: "text",
    placeholder: "John",
  },
  {
    id: "last_name",
    label: "Last Name",
    type: "text",
    placeholder: "Doe",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "name@email.com",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter password",
  },
]

const Signup = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
  })

  return (
    <div className="py-3 flex h-screen bg-background">
      <div className="p-5 flex-1 overflow-y-auto space-y-6">
        <Bento className="mx-auto max-w-xl py-10 px-6 space-y-6">
          {/* Title */}
          <div className="flex flex-col text-center space-y-2">
            <h1 className="text-h1 font-bold">Sign Up</h1>
            <p className="mx-auto max-w-60 text-body text-normal letter-spacing">
              Start tracking your physical performance with professional
              discipline.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {fields.map((field) => (
              <Input
                key={field.id}
                id={field.id}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                onChange={(e) =>
                  updateFormField(setForm, `${field.label}`, e.target.value)
                }
              />
            ))}

            <Button className="px-5 flex items-center font-semibold gap-2 rounded-lg shadow">
              <p>Join Now</p>
            </Button>
          </form>
          <div className="py-3 flex items-center text-normal gap-3">
            <span className="h-px w-full bg-foreground-light" />
            <p className="uppercase text-body text-nowrap">Already a member?</p>
            <span className="h-px w-full bg-foreground-light" />
          </div>
          <div className="w-full">
            <p className="mx-auto max-w-60 text-h3 text-center text-primary font-bold letter-spacing">
              Sign in to your account
            </p>
          </div>
        </Bento>
        <hr className="text-normal/30" />
      </div>
    </div>
  )
}

export default Signup
