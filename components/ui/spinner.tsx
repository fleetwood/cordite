import React from 'react'
import {classNameProps} from 'types'
import { twMerge } from 'tailwind-merge'

type SpinnerProps = classNameProps & {}

const Spinner = (props:SpinnerProps) => <div className={twMerge('animate-spin', props.className)}>C</div>

export default Spinner