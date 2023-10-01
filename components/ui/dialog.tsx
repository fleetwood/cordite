import React, {ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'
import {uuid} from 'utils/helpers'

type DialogContainerProps = classNameProps & {
  id?:  string
  buttonLabel?: string
  buttonClass?: string
  modalTitle?: string
  children: ReactNode
  boxClass?: string
}

const DialogContainer = (props:DialogContainerProps) => {
  const id = props.id ?? 'modal-'+uuid()
  return (
    <div className={props.className}>
      <button
        className={twMerge('btn', props.buttonClass)}
        // @ts-ignore
        onClick={() => document.getElementById(id).showModal()}
      >
        {props.buttonLabel ?? 'Open Dialog'}
      </button>
      <dialog id={id} className="modal">
        <div className={twMerge('modal-box w-5/6', props.boxClass)}>
          {props.modalTitle && (
            <h3 className="font-bold text-lg">{props.modalTitle}</h3>
          )}
          {props.children}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default DialogContainer