import React, {Dispatch, SetStateAction} from 'react'
import Label, {LabelProps} from './Label'
import {classNameProps, variantProps} from 'types'
import {twMerge} from 'tailwind-merge'
import {uuid} from 'utils/helpers'

type Props = LabelProps & variantProps & classNameProps & {
  value:    number
  setValue: (v:any) => void
  min:      number
  max:      number
  step:     number
}

const SelectRange = (props:Props) => {
  const genItems = () => {
    let items = []
    for( var i = props.min; i <= props.max; i += props.step) { items.push(i)}
    return items
  }
  const items = genItems()

  return (
    <div>
      {props.label && <Label label={props.label} labelClass={props.labelClass} />}
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={(e) =>
          props.setValue(() => {
            try {
              return parseInt(e.currentTarget.value)
            } catch (error) {
              return props.value
            }
          })
        }
        className={twMerge('range', props.className)}
        step={props.step.toString()}
      />
      <div className="w-full flex justify-between text-xs px-2">
        {items.map((i) => (
          <span key={props.label 
            ? `${props.label.toLowerCase().replaceAll(' ','-')}-${i}` 
            : uuid()}
            className={twMerge(
              'cursor-pointer transition-colors duration-200',
              'btn btn-xs btn-circle hover:btn-primary',
              i === props.value ? 'btn-secondary' : 'btn-neutral'
            )}
            onClick={() => props.setValue(i)}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SelectRange