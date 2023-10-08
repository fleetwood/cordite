import React, {Dispatch, SetStateAction} from 'react'
import {classNameProps, variantProps} from 'types'
import Label, {LabelProps} from './Label'
import useVariants from 'src/hooks/useVariants'
import {twMerge} from 'tailwind-merge'
import useDebug from 'hooks/useDebug'
import {DEBUG} from 'utils/helpers'

const {debug} = useDebug('SelectInput')

type SelectInputProps = classNameProps & variantProps & LabelProps & {
  items: {
    id: string,
    name: string
  }[]
  default?: boolean
  item: any
  setItem: Dispatch<SetStateAction<any>>
}

const SelectInput = (props:SelectInputProps) => {
  const {bgVariant, textVariant, textVariantContent} = useVariants(props.variant)

  const onChange = (value:any) => {
    debug('onChange', {value})
    const val = props.items.find(i => i.id === value)
    debug('found', {val})
    props.setItem(val)
  }

  return (
    <div>
      {props.label && (
        <Label label={props.label} labelClass={props.labelClass} />
      )}
      <select
        className={twMerge(bgVariant, textVariantContent)}
        placeholder="Choose a Stat"
        onChange={(e) => onChange(e.currentTarget.value)}
      >
        {props.default !== false && (
          <option className={textVariantContent} id={null}>
            Choose a stat
          </option>
        )}
        {props.items.map((item) => (
          <option className={textVariantContent} key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput