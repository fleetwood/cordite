import Link from 'next/link'
import React, {ReactNode} from 'react'
import useVariants from 'src/hooks/useVariants'
import {twMerge} from 'tailwind-merge'
import {classNameProps, onClickProps, variantProps} from 'types'

type VmenuLinkProps = classNameProps & variantProps & onClickProps & {
  href? : string
  children: string|ReactNode
}

const VmenuLink = ({children, ...props}:VmenuLinkProps) => {
  const {bgVariant, txtVariant, txtVariantContent, } = useVariants(props.variant)
  return (
    <span
      className={twMerge(
        'min-w-full ',
        txtVariant,
        `hover:${bgVariant}`,
        `hover:${txtVariantContent}`,
        props.className
      )}
      onClick={props.onClick}
    >
      <Link href={props.href ?? '#'}>{children}</Link>
    </span>
  )
}

export default VmenuLink