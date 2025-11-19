interface ButtonProps {
  label: string
  icon?: React.ReactNode
  className?: string
  type?: "submit" | "button"
  onClick?: () => void
  children?: React.ReactNode
}

export default function Button(props: ButtonProps) {
  const {
    label,
    icon,
    className = "",
    type = "button",
    onClick,
    children,
  } = props

  return (
    <button
      type={type}
      className={`py-2 px-4 lg:px-6 lg:py-2 bg-[#50B4B4] rounded-md border-0 text-white lg:text-xl active:scale-105 hover:bg-cyan-600 transition-all ease-in  ${className}`}
      onClick={onClick}
    >
      {icon && (
        <span>
          <div> icon </div>
        </span>
      )}

      {/* label */}
      <span>{label}</span>

      {/* children */}
      <span>{children}</span>
    </button>
  )
}
