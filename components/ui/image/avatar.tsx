import React from 'react'
import {SizeProps, classNameProps} from 'types'
import SafeImage from './safeImage'
import {twMerge} from 'tailwind-merge'
type Props = classNameProps & {
  size?:    SizeProps
  src:      string
  hex?:     boolean
  round?:   boolean
  admin?:   boolean
  dm?:      boolean
}

const Avatar = ({src, size = 'md',...props}:Props) => {
  const w = size === 'xl' ? 'w-40'
          : size === 'lg' ? 'w-32'
          : size === 'sm' ? 'w-16'
          : size === 'xs' ? 'w-8'
          : 'w-24'
  const shape = props.hex ? 'mask mask-hexagon' 
              : props.round ? 'rounded-full '
              : ''
  return (
    <div className={twMerge("avatar relative", w)}>
      <SafeImage src={src} className={shape} />
      {props.admin && (
        <span className="top-4 right-0 absolute text-xs text-secondary-content bg-secondary p-1 rounded-full">
          ADM
        </span>
      )}
      {props.dm && (
        <span className="top-4 right-0 absolute bg-primary text-xs text-primary-content p-1 rounded-full">
          DM
        </span>
      )}
    </div>
  )
}
 
export default Avatar