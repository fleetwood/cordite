import Link from 'next/link'
import React, {ReactNode} from 'react'
import useVariants from 'src/hooks/useVariants'
import {twMerge} from 'tailwind-merge'
import {classNameProps, onClickProps, variantProps} from 'types'
import {CaretLeftIcon} from '../icons'

type VmenuLinkProps = classNameProps & variantProps & onClickProps & {
  href? : string
  children: string|ReactNode
  selected?: boolean
}

const VmenuLink = ({children, ...props}:VmenuLinkProps) => {
  const {bgVariant, txtVariant, txtVariantContent, borderVariant} = useVariants(props.variant)
  return (
    <Link
      className={twMerge(
        `transition-all duration-200 ease-out`,
        `flex items-center justify-end font-semibold`,
        `hover:${bgVariant} hover:${txtVariantContent}`,
        // `pr-4 border-r-4 ${borderVariant}`, 
        // props.selected ? 'border-opacity-50' : 'border-opacity-0',
        txtVariant, props.className
      )}
      onClick={props.onClick}
      href={props.href ?? '#'}>
        {children}
        <CaretLeftIcon className={twMerge('h-6 w-6',props.selected ? 'opacity-100' : 'opacity-0')} />
    </Link>
  )
}

export default VmenuLink