import React, {Dispatch, SetStateAction} from 'react'
import {classNameProps, variantProps} from 'types'
import { twMerge } from 'tailwind-merge'
import Label, {LabelProps} from './Label'
import useVariants from 'src/hooks/useVariants'

type TextInputProps = classNameProps &
  variantProps &
  LabelProps & {
    placeholder?: string
    value?:       string
    setValue?:    Dispatch<SetStateAction<string | undefined>>
    onChange?:    React.FormEventHandler<HTMLInputElement>
    onBlur?:      React.FormEventHandler<HTMLInputElement>
    onSubmit?:    React.FormEventHandler<HTMLInputElement>
  }

const TextInput = (props:TextInputProps) => {
  const {bgVariant, textVariant, textVariantContent} = useVariants(props.variant ?? 'neutral')
  return (
    <div>
      {props.label && <Label label={props.label} labelClass={props.label} />}
      <input
        type="text"
        placeholder={props.placeholder}
        className={twMerge(
          'input input-ghost w-full',
          props.variant ? [bgVariant, textVariantContent] : [],
          props.className
        )}
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (props.setValue) props.setValue(e.currentTarget.value)
          if (props.onChange) props.onChange
        }}
        onBlur={props.onBlur}
        onSubmit={props.onSubmit}
      />
    </div>
  )
}

export default TextInput