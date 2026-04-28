import { useState } from "react"
import { updateFormField } from "@/lib/helpers"
import { ArrowRight } from "lucide-react"
import { Bento } from "@/components/ui/Bento"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Logo } from "@/components/ui/Logo"
import { useNavigate } from "react-router-dom"
import { sigin } from "@/features/auth/services/authService"
import { loginConfig } from "@/features/auth/lib/loginConfig"

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "" })
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await sigin(form)
      navigate("/onboarding")
    } catch (error) {
      setMessage(error.message)
    } finally {
      console.log(message)
      setLoading(false)
    }
  }

  return (
    <div className="flex-1 overflow-y-auto space-y-4">
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
          {loginConfig.map((field) => (
            <Input
              key={field.id}
              name={field.id}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              onChange={(e) =>
                updateFormField(setForm, `${field.id}`, e.target.value)
              }
            />
          ))}

          <Button
            type="submit"
            className="px-5 w-full flex items-center font-semibold gap-2 rounded-lg shadow"
          >
            <p>Continue</p>
            <ArrowRight size={19} />
          </Button>
        </form>
        <div className="py-3 flex items-center text-normal gap-3">
          <span className="h-px w-full bg-foreground-light" />
          <p className="uppercase text-body text-nowrap">
            Don't have an account?
          </p>
          <span className="h-px w-full bg-foreground-light" />
        </div>
        <div className="w-full">
          <p
            className="mx-auto max-w-60 text-h3 text-center text-primary font-bold letter-spacing"
            onClick={() => navigate("/auth/signup")}
          >
            Create Account
          </p>
        </div>
      </Bento>
    </div>
  )
}

export default Login
