
import Label, {LabelProps} from 'components/forms/Label'
import useDebug from 'hooks/useDebug'
import {CharStatCreateProps} from 'prisma/context'
import React, {Dispatch, SetStateAction, useState} from 'react'
import {twMerge} from 'tailwind-merge'
import {variantProps,classNameProps} from 'types'
import {DEBUG, uuid} from 'utils/helpers'

const {debug} = useDebug('StatRange')

type Props = LabelProps &
  variantProps &
  classNameProps & {
    range?:     [number, number]
    min?:       number
    max?:       number
    value:      CharStatCreateProps
    setValue:   Dispatch<SetStateAction<CharStatCreateProps>>
    capped?:    boolean
    available?: number
  }

const defaultRange = [-2, 5]
    , castRange = [0,5]

const StatRange = ({available = 0, min = -2, max = 10, ...props}:Props) => {
  const step = 1
  const range = props.range ?? props.value.cast ? castRange : defaultRange

  const genItems = () => {
    let items = []
    for (var i = range[0]; i <= range[1]; i += step) {
      items.push(i)
    }
    return items
  }
  const items = genItems()

  const [level, setLevel] = useState(props.value.level)
  
  const setValue = (n:any) => {
    debug('setVal', n)
    if (!n) { return }
    const num = parseInt(n) as number
    const theRentIsTooDamnHigh = (n - level) * (props.value.cast ? 2 : 1) > available
    const outOfRange = num < min || num > max
    if (theRentIsTooDamnHigh || outOfRange) { return }

    setLevel(() => num)
    const current = {...props.value, level: num}
    props.setValue(() => current)
  }

  const btnClass = (i:number) => {
    const classes = []
    const selected = i === level
    const inRange = (i >= min && i <= max)
    const unAvailable = (i - level) * (props.value.cast ? 2 : 1) > available
    
    classes.push(selected ? 'btn-secondary' 
      : unAvailable ? 'btn-disabled'
      : 'btn-neutral'
    )
    classes.push(inRange ? 'hover:btn-primary' : selected ? 'btn-secondary' : 'btn-disabled')
    return twMerge(classes)
  }

  return (
    <div className='bg-base-100/50 odd:bg-base-100/70 my-2 p-2 border border-neutral'>
      {props.label && (
        <Label
          label={props.label + ` : ${level}`}
          labelClass={twMerge(
            'mt-0 text-lg',
            props.value.cast ? 'text-secondary' : 'text-primary',
            props.labelClass
          )}
        />
      )}
      <input
        type="range"
        min={range[0]}
        max={range[1]}
        value={level}
        onChange={(e) => {
          e.preventDefault()
          setValue(e.currentTarget?.value)
        }}
        className={twMerge(
          'range', 
          level >= 5 ? 'range-' : '',
          level >= 3 ? 'range-success' : 
          level > 0 ? 'range-secondary' :
          level < 0 ? 'range-warning' : 'range-neutral',
          props.className
          )}
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
              btnClass(i)
            )}
            onClick={() => setValue(i.toString())}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  )
}

export default StatRange