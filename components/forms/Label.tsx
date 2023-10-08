import {twMerge} from 'tailwind-merge'
import {variantProps} from 'types'

export type LabelProps = variantProps & {
  label?: string
  labelClass?: string
}

const Label = (props:LabelProps) => {
  return (
    <label className="label">
      <span className={twMerge('label-text', props.labelClass)}>
        {props.label}
      </span>
    </label>
  )
}

export default Label