import {ReactNode, SVGAttributes} from "react"

export type SizeProps = 'xs'|'sm'|'md'|'lg'|'xl'|'xx'

export type SvgProps = SVGAttributes<SVGElement> & {
  className?: string
  size?: SizeProps
}

export type IconProps = SvgProps & {
  children?: ReactNode
  fill?: string
  viewBox?: string
  size?: SizeProps
}

export type classNameProps = {
  className?: string
}

export type variantProps = {
  variant?: Variants
}

export type onClickProps = {
  onClick?: (e:any) => any
}

export type Variants =
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'info'
  | 'warning'
  | undefined
