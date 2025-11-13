import React from "react"
interface ContainerProps {
  children: React.ReactNode
  tag?: "section" | "div" | "header" | "footer"
  className?: string
  id?: string
  ref?: React.Ref<HTMLDivElement> | null
}

export default function Container(props: ContainerProps) {
  const { children, tag = "section", className = "", id, ref } = props
  const Tag = tag
  return (
    <Tag
      id={id}
      ref={ref}
      className={`mx-auto w-full relative max-w-[1540px] mt-4 md:mt-4 lg:mt-2 mb-2 lg:mb-2 ${className}`}
    >
      {children}
    </Tag>
  )
}
