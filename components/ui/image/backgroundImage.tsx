import React from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'

type Props = classNameProps & {
  url?: string
  contain?: boolean,
  cover?: boolean
}

const BackgroundImage = (props: Props) => {
  const style = {...props.style, backgroundImage: props.url ? `url(${props.url})`: undefined}
  return (
    <div
      className={twMerge(
        'bg-no-repeat',
        props.contain
          ? 'bg-contain'
          : props.cover
          ? 'bg-cover'
          : 'bg-auto',
        props.className
      )}
      style={style}
    ></div>
  )
}

export default BackgroundImage