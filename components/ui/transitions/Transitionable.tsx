import {Transition} from '@headlessui/react'
import React, {ReactNode} from 'react'
import {classNameProps} from 'types'

type Props = classNameProps & {
  children?:  ReactNode | ReactNode[]
  show:       boolean
  fade?:      boolean
}

const defaultClass = {
  enter: "transition-all duration-200",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
  leave: "transition-all duration-200",
}

const Transitionable = ({children, ...props}:Props) => {
  const transitionType = 
    props.fade ? defaultClass
    : defaultClass

  return (
    <Transition
      as={'div'}
      {...transitionType}
      show={props.show}
      className={props.className}
    >
      {children}
    </Transition>
  )
}

export default Transitionable