import React, {Dispatch, SetStateAction} from 'react'
import {classNameProps, variantProps} from 'types'
import { twMerge } from 'tailwind-merge'
import Label from './Label'
import useVariants from 'src/hooks/useVariants'

type TextAreaProps = classNameProps & variantProps & {
  placeholder?: string
  label?:       string
  labelClass?:  string
  value?:       string
  setValue?:    Dispatch<SetStateAction<string|undefined>>
}

const TextArea = (props:TextAreaProps) => {
  const { bgVariant, textVariant, textVariantContent } = useVariants(props.variant ?? 'neutral')

  return (
    <div>
      {props.label && (
        <Label label={props.label} labelClass={props.labelClass} />
      )}
      <textarea
        placeholder={props.placeholder}
        className={twMerge(
          'textarea textarea-ghost w-full',
          props.variant ? [bgVariant, textVariantContent] : [],
          props.className
        )}
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          if (props.setValue) props.setValue(e.currentTarget.value)
        }}
      ></textarea>
    </div>
  )
}

export default TextArea