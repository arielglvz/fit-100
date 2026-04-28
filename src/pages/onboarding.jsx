import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Radio } from "@/components/ui/Radio"
import { activities, gender, objectives } from "@/features/onboarding/data"
import { updateFormField } from "@/lib/helpers"
import { useState } from "react"

// gender

const Onboarding = () => {
  const [form, setForm] = useState({
    gender: "male",
    age: "",
    height: "",
    start_weight: "",
    goal: "cut",
    activity_level: "sedentary",
  })
  const [currentActivity, setCurrrentActivity] = useState(0)

  const handleForm = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className="h-screen bg-background">
      {/* Header */}
      {/* <div className="py-4 w-full max-h-16 px-5 flex items-center justify-between border-b-2 border-b-muted">
        <p className="text-header font-bold">Performance</p>
        <div className="flex items-center gap-3">
          <div className="w-16 h-1.5 bg-surface-progress rounded-md overflow-hidden shadow">
            <div className="bg-foreground w-[33.33%] h-1.5"></div>
          </div>
          <p className="font-semibold text-body uppercase text-muted">
            step 1/3
          </p>
        </div>
      </div> */}
      <div className="px-5 py-6 flex-1 overflow-y-auto space-y-3">
        {/* <hr className="text-muted" /> */}
        <div className="flex flex-col items-left space-y-2">
          <h1 className="text-h1 font-bold">Personal Profile</h1>
          <p className="max-w-60 text-body text-secondary letter-spacing">
            Set you biological benchmarks to calibrate your performance targets
            and nutritional baseline.
          </p>
        </div>

        <form onSubmit={handleForm} className="py-4 space-y-4">
          {/* GENDER */}
          <Radio
            title="GENDER"
            options={gender}
            value={form.gender}
            name="gender"
            onChange={(val) => updateFormField(setForm, "gender", val)}
          />

          <div className="flex gap-3">
            {/* AGE */}
            <Input
              id="age"
              className="text-h2 font-bold"
              label="AGE"
              name="age"
              value={form.age}
              placeholder="yrs"
              onChange={(e) => updateFormField(setForm, "age", e.target.value)}
            />

            {/* HEIGHT */}
            <Input
              id="height"
              className="text-h2 font-bold"
              label="HEIGHT"
              name="height"
              value={form.height}
              placeholder="cm"
              onChange={(e) =>
                updateFormField(setForm, "height", e.target.value)
              }
            />
          </div>

          {/* WEIGHT */}
          <Input
            id="start_weight"
            className="text-h1 font-bold text-center"
            label="CURRENT WEIGHT"
            name="start_weight"
            value={form.start_weight}
            placeholder="kg"
            onChange={(e) =>
              updateFormField(setForm, "start_weight", e.target.value)
            }
          />

          <div className="space-y-3">
            <p className="text-xs font-bold tracking-wide uppercase text-secondary">
              PRIMARY OBJECTIVE
            </p>
            <div className="flex flex-col gap-4">
              {objectives.map((obj) => {
                const Icon = obj.icon

                return (
                  <label key={obj.id} className="group w-full cursor-pointer">
                    <input
                      type="radio"
                      name="goal"
                      value={obj.id}
                      checked={form.goal === obj.id}
                      onChange={(e) =>
                        updateFormField(setForm, "goal", e.target.value)
                      }
                      className="hidden peer"
                    />

                    <div
                      className="
                                h-[103.25px] 
                                flex items-center justify-between gap-2 px-4 py-2 rounded-xl transition border-2
                                border-muted text-muted
                                peer-checked:border-primary shadow
                              "
                    >
                      {/* custom radio circle */}
                      <div className="flex items-center gap-2">
                        <div className="peer-checked:border-primary peer-checked:text-primary ...">
                          <div
                            className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-muted 
                    group-has-[input:checked]:bg-primary"
                          >
                            <span className="w-2 h-2 rounded-full group-has-[input:checked]:bg-surface"></span>
                          </div>
                        </div>

                        <div>
                          <p className="text-primary font-semibold">
                            {obj.label}
                          </p>
                          <p className="text-small">{obj.subtext}</p>
                        </div>
                      </div>

                      {Icon && (
                        <Icon
                          size={30}
                          className="group-has-[input:checked]:text-primary"
                        />
                      )}
                    </div>
                  </label>
                )
              })}
            </div>
          </div>

          <div className="max-w-xl space-y-3">
            <p className="text-xs font-bold tracking-wide uppercase text-secondary">
              DAILY ACTIVITY
            </p>
            <div className="p-1 h-10 bg-surface-progress rounded-md shadow">
              <div className="flex justify-around transition">
                {activities.map((option) => {
                  return (
                    <label key={option.label} className="group cursor-pointer ">
                      <input
                        type="radio"
                        name="activity_level"
                        value={option.label}
                        checked={form.activity_level === option.label}
                        onChange={(e) => {
                          setCurrrentActivity(option.id)
                          updateFormField(
                            setForm,
                            "activity_level",
                            e.target.value,
                          )
                        }}
                        className="hidden peer"
                      />
                      <div
                        className="
                          px-1 min-w-[80.5px] h-8 flex items-center justify-center text-foreground-muted font-bold text-small uppercase
                        group-has-[input:checked]:text-primary group-has-[input:checked]:bg-surface rounded-sm
                        "
                      >
                        {option.label}
                      </div>
                    </label>
                  )
                })}
              </div>
            </div>
            <div className="py-4 text-small text-muted text-center">
              "{activities[currentActivity].desc}"
            </div>
          </div>

          {/* SUbmit */}
          <Button
            type="submit"
            className="py-5 px-3 w-full flex items-center font-semibold gap-2 rounded-lg shadow"
          >
            <p>Continue to Nutrition</p>
          </Button>

          <p
            className="text-secondary text-body text-center font-medium"
            onClick={() => {}}
          >
            I'll set this up later
          </p>
        </form>
      </div>
    </div>
  )
}

export default Onboarding
