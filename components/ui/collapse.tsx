import {Disclosure} from '@headlessui/react'
import {LabelProps} from 'components/forms/Label'
import {ReactNode} from 'react'
import {classNameProps} from 'types'
import {ChevronUpIcon} from './icons'

type Props = classNameProps & LabelProps & {
  label?:   string
  children: ReactNode | ReactNode[]
}

const Collapse = ({children, ...props}:Props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="my-2">
          <Disclosure.Button
            className={`
                  flex w-full justify-between 
                  px-4 py-2 text-left text-sm 
                  font-medium text-secondary-content 
                  hover:bg-secondary transform duration-300
                  ${open ? 'bg-secondary' : 'bg-neutral'}
                  `}
          >
            {props.label && <span>{props.label}</span>}
            <ChevronUpIcon
              className={`transform duration-300 ${
                open ? '' : '-rotate-180 '
              } h-8 w-8`}
            />
          </Disclosure.Button>
          <Disclosure.Panel
            className="
                  border border-dashed border-secondary
                  px-4 pt-4 pb-2 text-sm"
          >
            {children}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

export default Collapse