import {ReactNode} from "react"
import {variantProps} from "types"

type EzButtonProps = variantProps & {
    label:      ReactNode
    onClick?:   () => void
    disabled?:  boolean
    className?: string
}

const EzButton = ({label, onClick, className, variant = 'primary', disabled=false}:EzButtonProps) => <button className={`btn btn-${variant} text-${variant}-content ${className}`} onClick={onClick} disabled={disabled}>{label}</button>

export default EzButton