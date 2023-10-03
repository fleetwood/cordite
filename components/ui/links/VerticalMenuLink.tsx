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
    <Link
      className={twMerge(
        `transition-all duration-200 ease-out`,
        `hover:${bgVariant} hover:${txtVariantContent}`,
        txtVariant, props.className
      )}
      onClick={props.onClick}
      href={props.href ?? '#'}>{children}
    </Link>
  )
}

export default VmenuLink