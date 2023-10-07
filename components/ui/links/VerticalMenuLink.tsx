import Link from 'next/link'
import React, {ReactNode} from 'react'
import useVariants from 'src/hooks/useVariants'
import {twMerge} from 'tailwind-merge'
import {classNameProps, onClickProps, variantProps} from 'types'
import {CaretLeftIcon, GearStatIcon} from '../icons'
import {useRouter} from 'next/router'

type VmenuLinkProps = classNameProps & variantProps & onClickProps & {
  href? : string
  children: string|ReactNode
  selected?: boolean
}

const VmenuLink = ({children, ...props}:VmenuLinkProps) => {
  const {bgVariant, textVariant, textVariantContent, borderVariant} = useVariants(props.variant)
  const {push} = useRouter()
  return (
    <div
      className={twMerge(
        `cursor-pointer transition-all duration-200 ease-out`,
        `flex items-center justify-end font-semibold`,
        `hover:${bgVariant} hover:${textVariantContent}`,
        textVariant, props.className
      )}
      onClick={() => props.onClick ?? push(props.href)}
    >
      {children}
      <GearStatIcon
        className={twMerge(
          'pt-1 h-6 w-6',
          props.selected ? 'opacity-100' : 'opacity-0'
        )} />
    </div>
  )
}

export default VmenuLink