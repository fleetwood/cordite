import React, {Dispatch, SetStateAction, useState} from 'react'
import {classNameProps, variantProps} from 'types'
import Label, {LabelProps} from './Label'
import useVariants from 'src/hooks/useVariants'
import {twMerge} from 'tailwind-merge'
import useDebug from 'hooks/useDebug'
import {DEBUG} from 'utils/helpers'
import {it} from 'node:test'

const {debug} = useDebug('SelectInput')

type SelectInputProps = classNameProps & variantProps & LabelProps & {
  items: {
    id: string,
    name: string
  }[]

  default?:     boolean
  item:         any
  placeholder?: string
  setItem:      Dispatch<SetStateAction<any>>
}

const SelectInput = ({variant='neutral', ...props}:SelectInputProps) => {
  const {bgVariant, textVariantContent} = useVariants(variant)

  const onChange = (value:any) => {
    debug('onChange', {value})
    const val = props.items.find(i => i.id === value)
    debug('found', {val})
    props.setItem(val)
  }

  return (
    <div className={props.className}>
      {props.label && (
        <Label label={props.label} labelClass={props.labelClass} />
      )}
      <select
        className={twMerge(bgVariant, textVariantContent)}
        placeholder={props.placeholder ?? props.label}
        onChange={(e) => onChange(e.currentTarget.value)}
      >
        {props.default !== false && (
          <option className={textVariantContent} id={null}>
            {props.placeholder ?? props.label}
          </option>
        )}
        {props.items.map((item) => (
          <option className={textVariantContent} key={item.id} value={item.id} selected={item.id === props.item}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput