import React, {Dispatch, SetStateAction} from 'react'
import {classNameProps, variantProps} from 'types'
import { twMerge } from 'tailwind-merge'

type TextInputProps = classNameProps & variantProps & {
  placeholder?: string
  label?:       string
  labelClass?:  string
  value?:       string
  setValue?:    Dispatch<SetStateAction<string|undefined>>
}

const TextInput = (props:TextInputProps) => {
  return (
    <div>
      {props.label && (
        <label className="label">
          <span className={twMerge('label-text', props.labelClass)}>{props.label}</span>
        </label>
      )}
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