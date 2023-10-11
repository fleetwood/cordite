import React from 'react'
import {SizeProps, classNameProps} from 'types'
import SafeImage from './safeImage'
import {twMerge} from 'tailwind-merge'
type Props = classNameProps & {
  size?:    SizeProps
  src:      string
  hex?:     boolean
  round?:   boolean
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
    <div className='avatar' >
      <div className={twMerge(w, shape)}>
        <SafeImage src={src} />
      </div>
    </div>
  )
}
 
export default Avatar