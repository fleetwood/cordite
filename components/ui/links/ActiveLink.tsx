import Link from 'next/link'
import {useRouter} from 'next/router'
import {ReactNode} from 'react'
import useVariants from 'src/hooks/useVariants'
import {twMerge} from 'tailwind-merge'
import {classNameProps, variantProps} from 'types'

type ActiveLinkProps = classNameProps & variantProps & {
  current?: string
  href:     string
  children:    ReactNode
  svg?:     ReactNode
}

const ActiveLink = ({children, ...props}:ActiveLinkProps) => {
  const {txtVariant, btnVariant} = useVariants(props.variant)
  return <Link href={props.href}><a className={twMerge('btn btn-sm',btnVariant,props.className)}>{children}</a></Link>
}

export default ActiveLink