import React, {Dispatch, SetStateAction} from 'react'
import {classNameProps, variantProps} from 'types'
import { twMerge } from 'tailwind-merge'
import Label, {LabelProps} from './Label'

type TextInputProps = classNameProps & variantProps & LabelProps & {
  placeholder?: string
  value?:       string
  setValue?:    Dispatch<SetStateAction<string|undefined>>
}

const TextInput = (props:TextInputProps) => {
  return (
    <div>
      {props.label && <Label label={props.label} labelClass={props.label} />}
      <input
        type="text"
        placeholder={props.placeholder}
        className={twMerge(
          'input input-ghost w-full max-w-xs',
          props.className
        )}
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (props.setValue) props.setValue(e.currentTarget.value)
        }}
      />
    </div>
  )
}

export default TextInput