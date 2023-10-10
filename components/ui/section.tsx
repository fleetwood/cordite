import React, {ReactNode, useEffect} from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps, variantProps} from 'types'

export type SectionProps = 
  classNameProps &
  variantProps & 
  {
    title?:           string
    children:         ReactNode | string
    titleClass?:      string
    backgroundImage?: string
  }

const Section = ({children, ...props}:SectionProps) => {
  const style = {...props.style, backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})`: undefined}
  return (
    <div className={twMerge(props.className)} style={style}>
      {props.title &&
        <h2 className={twMerge('font-fraunces p-2',props.titleClass)}>{props.title}</h2>
      }
      {children}
    </div>
  )
}

export default Section