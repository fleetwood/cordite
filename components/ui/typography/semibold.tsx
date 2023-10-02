import React, {ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'

type SemiboldProps = classNameProps & {
  children: ReactNode | string
}

const Semibold = (props:SemiboldProps) => <span className={twMerge('font-semibold', props.className)}>{props.children}</span>
export default Semibold