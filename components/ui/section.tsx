import React, {ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps, variantProps} from 'types'

type SectionProps = classNameProps & variantProps & {
  title?: string
  children: ReactNode|string
  titleClass?: string
}

const Section = ({children, ...props}:SectionProps) => {
  return (
    <div className={twMerge(props.className)}>
      {props.title &&
        <h2 className={twMerge('text-2xl py-2',props.titleClass)}>{props.title}</h2>
      }
      {children}
    </div>
  )
}

export default Section