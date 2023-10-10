import React from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps, variantProps} from 'types'

const Divider = ({variant = 'neutral', ...props}:variantProps & classNameProps) => {
  return <hr className={twMerge(`border border-${variant}/20 my-1`, props.className)} />
}

export default Divider