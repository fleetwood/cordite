import React, { MouseEventHandler } from "react"
import {classNameProps} from "types"

type ResponsiveIconButtonProps = classNameProps & {
  icon: JSX.Element
  label?: string
  iconClassName?: string
  labelClassName?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const ResponsiveIconButton = (props: ResponsiveIconButtonProps) => {
  const {
    icon,
    label,
    className,
    iconClassName,
    labelClassName,
    onClick
  } = props

  return (
    <button
      className={`
      text-opacity-70
      hover:text-opacity-100
      hover:shadow
      transition-colors ease-linear duration-200
      flex space-x-1 ${className || "btn-primary"}
      `}
      onClickCapture={onClick}
    >
      <span className={iconClassName}>{icon}</span>
      {label && (
        <span className={`hidden lg:inline-block ${labelClassName || 'text-primary-content'}`}>
          {label}
        </span>
      )}
    </button>
  )
}

export default ResponsiveIconButton
