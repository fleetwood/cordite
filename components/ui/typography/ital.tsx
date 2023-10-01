import React, { ReactNode } from 'react'
import {twMerge} from 'tailwind-merge'
import { classNameProps } from 'types'

type ItalProps = classNameProps & {
  children: ReactNode | string
}

const Ital = (props: ItalProps) => (
  <span className={twMerge('italic', props.className)}>{props.children}</span>
)
export default Ital
