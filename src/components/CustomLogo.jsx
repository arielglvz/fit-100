import { DumbellLogo } from "@/components/assets/svg"

const CustomLogo = ({ label }) => {
  return (
    <div className="py-3 flex flex-col justify-center items-center space-y-3">
      <div className="w-max h-auto p-2.5 bg-primary rounded-xl shadow">
        <img src={DumbellLogo} className="w-6 h-6" alt="dumbell icon" />
      </div>
      {label && (
        <p className="text-sans text-normal text-small font-semibold text-center">
          {label}
        </p>
      )}
    </div>
  )
}

export default CustomLogo
