import { Dispatch, Fragment, ReactNode, SetStateAction, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import EzButton from '../buttons/ezButton'
import { XIcon } from '../icons'
import {variantProps} from 'types'

type FullScreenDialogProps = variantProps & {
  open?: boolean
  setOpen?: Dispatch<SetStateAction<boolean>>
  btnClassname?: string
  btnLabel?: ReactNode
  title?: ReactNode
  titleClassname?: string
  children: ReactNode
  contentClassname?: string
  footer?: ReactNode
  footerClassname?: string
}

const FullScreenDialog = ({children, ...props}:FullScreenDialogProps) => {
  const [open, setOpen] = [props.open, props.setOpen] ?? useState(false)
  const cancelButtonRef = useRef(null)

  return (
    <>
      <EzButton
        label={props.btnLabel ?? 'Open Dialog'}
        onClick={() => setOpen(true)}
      />
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel
                  className="relative transform 
                  overflow-hidden
                  bg-neutral transition-all 
                    w-screen h-screen"
                >
                  <div className="bg-neutral h-full flex flex-col">
                    <div className="flex flex-row p-2 md:p-4">
                      <Dialog.Title
                        as="h3"
                        className="flex-grow text-typography font-semibold leading-6"
                      >
                        {props.title}
                      </Dialog.Title>
                      <EzButton
                        onClick={() => setOpen(false)}
                        label={<XIcon />}
                        className="btn-sm btn-circle"
                      />
                    </div>
                    <div className="flex-grow overflow-y-scroll scrollbar-hide">
                      {children}
                    </div>
                    </div>
                    {props.footer && (
                      <div className="sticky bottom-0">
                        {props.footer}
                      </div>
                    )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
export default FullScreenDialog
