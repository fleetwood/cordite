import React, {Dispatch, SetStateAction} from 'react'
import {classNameProps, variantProps} from 'types'
import { twMerge } from 'tailwind-merge'

type TextAreaProps = classNameProps & variantProps & {
  placeholder?: string
  label?:       string
  labelClass?:  string
  value?:       string
  setValue?:    Dispatch<SetStateAction<string|undefined>>
}

const TextArea = (props:TextAreaProps) => {
  return (
    <div>
      {props.label && (
        <label className="label">
          <span className={twMerge('label-text', props.labelClass)}>
            {props.label}
          </span>
        </label>
      )}
      <textarea
        placeholder={props.placeholder}
        className={twMerge('textarea textarea-ghost', props.className)}
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          if (props.setValue) props.setValue(e.currentTarget.value)
        }}
      ></textarea>
    </div>
  )
}

export default TextArea