
import Label, {LabelProps} from 'components/forms/Label'
import useDebug from 'hooks/useDebug'
import {CharStatCreateProps} from 'prisma/context'
import React, {Dispatch, SetStateAction, useState} from 'react'
import {twMerge} from 'tailwind-merge'
import {variantProps,classNameProps} from 'types'
import {DEBUG, uuid} from 'utils/helpers'

const {debug} = useDebug('StatRange', DEBUG)

type Props = LabelProps &
  variantProps &
  classNameProps & {
    min?:     number
    max?:     number
    value:    CharStatCreateProps
    setValue: Dispatch<SetStateAction<CharStatCreateProps>>
    enabled?: boolean
  }

const StatRange = ({min = -2, max = 10, enabled = true, ...props}:Props) => {
  const step = 1
  const genItems = () => {
    let items = []
    for (var i = props.value.cast ? 0 : -2; i <= 10; i += step) {
      items.push(i)
    }
    return items
  }
  const items = genItems()

  const [level, setLevel] = useState(props.value.level)
  
  const setValue = (n:any) => {
    if (!n) { return }
    const num = n as number
    if (num < min || num > max) { return }

    setLevel(() => n as number)
    const current = {...props.value, level: n}
    debug('setValue', {value: {stat: props.label, ...props.value}, setTo: current})
    // props.setValue(() => current)
  }

  return (
    <div>
      {props.label && (
        <Label
          label={props.label + ` : ${level}`}
          labelClass={twMerge(
            props.value.cast ? 'text-secondary' : 'text-primary',
            props.labelClass
          )}
        />
      )}
      <input
        type="range"
        min={props.value.cast ? 0 : -2}
        max={10}
        value={level}
        onChange={(e) => {
          e.preventDefault()
          setValue(e.currentTarget?.value)
        }}
        className={twMerge('range', props.className)}
        step={step.toString()}
      />
      <div className="w-full flex justify-between text-xs px-2">
        {items.map((i) => (
          <span
            key={
              props.label
                ? `${props.label.toLowerCase().replaceAll(' ', '-')}-${i}`
                : uuid()
            }
            className={twMerge(
              'cursor-pointer transition-colors duration-200',
              'btn btn-xs',
              (i >= min && i <= max) ? 'btn-circle hover:btn-primary' : 'btn-disabled',
              i === level ? 'btn-secondary' : 'btn-neutral'
            )}
            onClick={() => setValue(i)}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  )
}

export default StatRange