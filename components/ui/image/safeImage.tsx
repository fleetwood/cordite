import React, {useState} from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'

type Props = classNameProps & { src: string }

const SafeImage = ({src, ...props}:Props) => {
  const [show, setShow] = useState(true)

  return (
    <img
      src={src}
      className={twMerge(props.className,
        show ? '' : 'hidden')}
      onError={() => setShow(false)}
    />
  )
}

export default SafeImage
