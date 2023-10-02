import React, {ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'

type SectionViewProps = classNameProps & {children: ReactNode}

const SectionView = ({children, ...props}:SectionViewProps) => {
  return (
    <div className={twMerge('w-full h-full p-4 text-secondary', props.className)}>
      {children}
    </div>
  )
}

export default SectionView