import Link from 'next/link'
import React, { ReactNode, RefObject } from 'react'
import {classNameProps, variantProps} from 'types'

type LinkWithIconProps = classNameProps & variantProps & {
    href?:      string
    onClick?:   (e?:any) => any
    spacing?:   number
    icon:       ReactNode
    label?:     string
    ref?:       RefObject<HTMLAnchorElement|HTMLDivElement>
}

const CdIconButton = (props: LinkWithIconProps) =>
  props.href ? (
    <Link
      ref={props.ref as RefObject<HTMLAnchorElement>}
      href={props.href}
      className={`text-${props.variant ?? 'primary'} flex space-x-${
        props.spacing ?? 2
      } ${props.className}`}
    >
      {props.icon} <span>{props.label}</span>
    </Link>
  ) : (
    <div
      ref={props.ref as RefObject<HTMLDivElement>}
      className={`cursor-pointer text-${
        props.variant ?? 'primary'
      } flex space-x-${props.spacing ?? 2} ${props.className}`}
      onClick={props.onClick}
    >
      {props.icon} <span>{props.label}</span>
    </div>
  )

export default CdIconButton