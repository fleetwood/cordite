import {LabelProps} from 'components/forms/Label'
import React, {ReactNode, useState} from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'
import {CaretLeftIcon} from './icons'

type Props = classNameProps & LabelProps & {
  children: ReactNode | ReactNode[]
}

const Collapse = ({children, ...props}:Props) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={twMerge('collapse border border-neutral/50 py-1 px-4')}>
      <input type="checkbox" className="peer" />
      <div className="
        collapse-title text-primary 
        flex items-center 
        hover:text-secondary cursor-pointer
        "
        onClick={(() => setOpen(o => !o))}>
        <span className="text-right">
          <CaretLeftIcon
            className={twMerge(
              'transition-all duration-300 ease-out',
              'text-primary w-8 h-8',
              open ? 'rotate-90' : '-rotate-90',
              )}
            />
        </span>
        <span className="">{props.label ? props.label : open ? 'CLOSE' : 'OPEN'}</span>
      </div>
      <div className={twMerge(open ? "collapse-open" : 'collapse-content')}>{children}</div>
    </div>
  )
}

export default Collapse