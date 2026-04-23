const CustomRadio = ({ title, options, value, onChange, name }) => {
  return (
    <div className="space-y-2">
      <p className="text-xs font-bold tracking-wide uppercase text-secondary">
        {title}
      </p>
      <div className="flex gap-3">
        {options.map((opt) => {
          const Icon = opt.icon

          return (
            <label
              key={opt.id}
              className="w-full text-xs font-bold tracking-wide uppercase text-label cursor-pointer"
            >
              {/* Hidden radio */}
              <input
                type="radio"
                name={name}
                value={opt.id}
                checked={value === opt.id}
                onChange={(e) => onChange(e.target.value)}
                className="hidden peer"
              />

              {/* UI */}
              <div
                className="h-[103.25px] 
                flex flex-col items-center justify-center gap-2 px-4 py-2 rounded-xl transition border-2
                border-muted text-muted
                peer-checked:border-primary peer-checked:text-primary
              "
              >
                {Icon && <Icon size={30} />}
                <span className="font-semibold">{opt.label}</span>
              </div>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default CustomRadio
