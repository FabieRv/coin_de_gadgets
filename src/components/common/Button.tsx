interface ButtonProps {
  label: string
  icon?: React.ReactNode
  className?: string
  type?: "submit" | "button"
  onClick?: () => void
}

export default function Button(props: ButtonProps) {
  const { label, icon, className = "", type = "button", onClick } = props
  return (
    <button
      type={type}
      className={`py-2 px-4 lg:px-6 lg:py-2  ${className}`}
      onClick={onClick}
    >
      {icon && (
        <span>
          <div> icon </div>
        </span>
      )}
      <span>{label}</span>
    </button>
  )
}
