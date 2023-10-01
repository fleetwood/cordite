import React, {ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps, variantProps} from 'types'

export type CardProps = classNameProps & {
  children:   ReactNode
  onClick?:   () => void
}

export type CardMediaProps = classNameProps & {
  onClick?: () => void
  media: string
  children?: ReactNode
}

export type CardTitleProps = CardProps & variantProps & {
  divider?: boolean
}

export type CardFooterProps = CardProps & {
  rightAlign?: boolean
  leftAlign?: boolean
  stretch?: boolean
}

export const CardMedia = ({
  media,
  className,
  children,
  ...props
}: CardMediaProps) => {
  const clickClass: string | null = props.onClick
    ? 'cursor-pointer hover:shimmer-r'
    : null
  return <div
    onClick={props.onClick ? props.onClick : () => {}}
    className={twMerge(
      'bg-cover h-[24rem] -mx-4 first-of-type:-mt-4',
      clickClass,
      className
    )}
    style={{ backgroundImage: 'url(' + media + ')'}}
    ></div>
}

export const CardTitle = ({divider, variant, className, children, ...props}:CardTitleProps) => {
  const dividerClass:string|null = divider ? `border-b ${variant ? `border-${variant}` : ''}`: null
  const variantClass:string|null = variant ? `text-${variant}` : null
  const clickClass:string|null = props.onClick ? 'cursor-pointer hover:shimmer-r' : null
  return <h3 onClick={props.onClick? props.onClick : () => {}} className={twMerge('w-full font-semibold', clickClass, dividerClass, variantClass, className)}>{children}<br className='clear-both' /></h3>
}

export const CardContent = ({className, children, ...props}:CardProps) => {
  const clickClass: string | null = props.onClick
    ? 'cursor-pointer hover:shimmer-r'
    : null
  return (
    <div
      className={twMerge(
        'w-full h-auto', 
        clickClass, 
        className
      )}
      onClick={props.onClick ? props.onClick : () => {}}
    >
      {children}
    </div>
  )
}

export const CardFooter = ({className, children, ...props}:CardFooterProps) => {
  const justify = props.leftAlign ? 'justify-items-start' :
    props.rightAlign ? 'justify-items-end' :
    'justify-items-center'
  const width = props.stretch ? 'min-w-full justify-evenly' : null
  const clickClass: string | null = props.onClick
    ? 'cursor-pointer hover:shimmer-r'
    : null
  return (
    <div
      className={twMerge(
        'w-full grid grid-flow-col',
        clickClass,
        justify,
        className
      )}
      onClick={props.onClick ? props.onClick : () => {}}
    >
      {children}
    </div>
  )
}

export const Card = ({ className, children, ...props }: CardProps) => {
  const clickClass: string | null = props.onClick
    ? 'cursor-pointer hover:shimmer-r'
    : null
  return (
    <div
      className={twMerge(
        'relative flex flex-col min-h-max bg-paper dark:bg-paperDark text-typography p-4 shadow-md',
        clickClass,
        className
      )}
      onClick={props.onClick ? props.onClick : () => {}}
    >
      {children}
    </div>
  )
}
