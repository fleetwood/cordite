import React, {Dispatch, SetStateAction, useEffect} from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps, variantProps} from 'types'
import {CaretLeftIcon} from './icons'
import useVariants from 'src/hooks/useVariants'
import {Variants} from './variants'

type Props = classNameProps & variantProps & {
  label?:       string
  labelClass?:  string
  labels?:      [string, string]
  labelsClass?: string
  value:        boolean
  setValue:     Dispatch<SetStateAction<boolean>>
  bool?:        boolean
  'on-off'?:    boolean
  yn?:          boolean
  border?:      boolean
  background?:  boolean
}

const ON = 'ON'
    , OFF = 'OFF'
    , YES = 'YES'
    , NO = 'NO'

const Toggle = (props:Props) => {
  const onoff = props['on-off'] !== undefined
  const fields = props.labels ?? onoff ? [ON, OFF] : props.yn ? [YES, NO] : ['true', 'false']

  const {bgVariant, bgVariantOff, textVariant, textVariantContent, borderVariant, borderVariantOff} = useVariants(props.variant)

  const left = props.value === true
      , right = props.value === false

  const leftBorder = props.border && left ? borderVariant : borderVariantOff
      , leftBg = props.background && left ? bgVariant : bgVariantOff
      , leftTxt = left ? props.background ? textVariantContent : textVariant : ''
      , rightBorder = props.border && right ? borderVariant : borderVariantOff
      , rightBg = props.background && right ? bgVariant : bgVariantOff
      , rightTxt = right ? props.background ? textVariantContent : textVariant : ''

  return (
    <div className={twMerge('grid grid-flow-row', props.className)}>
      {props.label && (
        <div className={twMerge('label label-text', props.labelClass)}>
          {props.label}
        </div>
      )}
      <div className="grid grid-cols-3 h-fit max-w-fit items-center">
        <div
          className={twMerge(
            ' cursor-pointer h-full p-1 border border-r-0 items-center',
            leftBorder,
            leftBg,
            leftTxt,
            props.labelClass
          )}
          onClick={() => props.setValue(true)}
        >
          {fields[0]}
        </div>
        <div
          className={twMerge(
            'border align-middle',
            props.border || props.background ? borderVariant : borderVariantOff,
            (props.border || props.background) && left
              ? 'border-l-0'
              : 'border-r-0'
          )}
        >
          <CaretLeftIcon
            className={twMerge(
              'text-primary w-8',
              'transition-all duration-200',
              right ? 'rotate-180' : 'rotate-0'
            )}
          />
        </div>
        <div
          className={twMerge(
            ' cursor-pointer h-full p-1 border border-l-0 items-center',
            rightBorder,
            rightBg,
            rightTxt,
            props.labelsClass
          )}
          onClick={() => props.setValue(false)}
        >
          {fields[1]}
        </div>
      </div>
    </div>
  )
}

export default Toggle