import React, {ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'

type TypographyProps = classNameProps & {
  children: ReactNode
}

const Typography = ({children, ...props}:TypographyProps) => {
  return (
    <div className={twMerge('text-base-content leading-relaxed p-2', props.className)}>
      {children}
    </div>
  )
}

export default Typography