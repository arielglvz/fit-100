import { Bento } from "@/components/ui/Bento"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { signupConfig } from "@/features/auth/lib/signupConfig"
import { signup } from "@/features/auth/services/authService"
import { updateFormField } from "@/lib/helpers"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [formData, setForData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  })

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await signup(formData)
      navigate("/auth/login")
    } catch (err) {
      setMessage(err.message)
    } finally {
      console.log(message)
      setLoading(false)
    }
  }

  return (
    <Bento className="mx-auto max-w-xl py-10 px-6 space-y-6">
      {/* Title */}
      <div className="flex flex-col text-center space-y-2">
        <h1 className="text-h1 font-bold">Sign Up</h1>
        <p className="mx-auto text-body text-normal letter-spacing">
          Start tracking your physical performance with professional discipline.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSignUp} className="space-y-5">
        {signupConfig.map((field) => (
          <Input
            key={field.id}
            name={field.id}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            autoComplete={field.autocomplete}
            onChange={(e) =>
              updateFormField(setForData, `${field.id}`, e.target.value)
            }
          />
        ))}

        <Button
          type="submit"
          className="px-5 w-full flex items-center font-semibold gap-2 rounded-lg shadow"
        >
          <p>Join Now</p>
        </Button>
      </form>
      <div className="py-3 flex items-center text-normal gap-3">
        <span className="h-px w-full bg-foreground-light" />
        <p className="uppercase text-body text-nowrap">Already a member?</p>
        <span className="h-px w-full bg-foreground-light" />
      </div>
      <div className="w-full">
        <p
          className="mx-auto max-w-60 text-h3 text-center text-primary font-bold letter-spacing"
          onClick={() => navigate("/auth/login")}
        >
          Sign in to your account
        </p>
      </div>
    </Bento>
  )
}

export default Signup
