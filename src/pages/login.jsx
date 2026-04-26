import { useState } from "react"
import { updateFormField } from "@/lib/helpers"
import { ArrowRight } from "lucide-react"
import { Bento } from "@/components/ui/Bento"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

const fields = [
  {
    id: "email",
    label: "Email Address",
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

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" })

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(form)
  }
  return (
    <div className="py-3 flex h-screen bg-gray-50">
      <div className="p-5 flex-1 overflow-y-auto space-y-6">
        <Logo label="ATHLETIC PRODUCTIVITY" />
        <Bento className="mx-auto max-w-xl py-10 px-5 space-y-6">
          {/* Title */}
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-h1 font-bold text-center">Login</h1>
            <p className="max-w-60 text-body text-center text-normal letter-spacing">
              Enter your credentials to access your performance dashboard.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleLogin}>
            {fields.map((field) => (
              <Input
                key={field.id}
                id={field.id}
                name={field.id}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                onChange={(e) =>
                  updateFormField(setForm, `${field.label}`, e.target.value)
                }
              />
            ))}

            <Button className="px-5 flex items-center font-semibold gap-2 rounded-lg shadow">
              <p>Continue</p>
              <ArrowRight size={19} />
            </Button>
          </form>
        </Bento>
        <div className="w-full ">
          <p className="mx-auto max-w-60 text-body text-center text-normal letter-spacing">
            Don't have an account?{" "}
            <span className="text-primary font-semibold">Create Account</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
