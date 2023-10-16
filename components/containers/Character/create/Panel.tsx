import {Transition} from '@headlessui/react'
import {ReactNode} from 'react'
type Props = {
  title?:     string
  current?:   number
  step:       number
  children?:  ReactNode
}

const CharStepPanel = (props:Props) => (
  <Transition
    as={'div'}
    enter='transition-opacity duration-200'
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    leave='transition-opacity duration-200'
    show={props.step === props.current}
    className={'bg-base-100/50 p-4'}
  >
    {props.title &&
    <h3 className='bg-base-100/30 p-2 font-semibold text-secondary uppercase'>{props.title}</h3>
    }
    {props.children}
  </Transition>
)

export default CharStepPanel