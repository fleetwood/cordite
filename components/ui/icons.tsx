import {IconProps,SizeProps, SvgProps} from 'types'

const currentColor = 'currentColor',
      none = 'none',
      colorOrDefault = (color: string | undefined) => color || currentColor

const sizeToClass = (size: SizeProps) =>
  size === undefined
    ? 'w-10' // undefined
    : size === 'xs'
    ? 'w-4'
    : size === 'sm'
    ? 'w-6'
    : size === 'lg'
    ? 'w-12'
    : size === 'xl'
    ? 'w-32'
    : size === 'xx'
    ? 'w-64'
    : 'w-8' // default or 'md'

const getClassName = ({className,size = 'md'}:{className?: string, size?: SizeProps}) => [className, sizeToClass(size)].join(' ')

export const SvgIcon = ({
  fill = currentColor,
  viewBox = '0 0 50 50',
  size = 'md',
  children,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    viewBox={viewBox}
    className={[sizeToClass(size), props.className].join(' ')}
    {...props}
  >
    {children}
  </svg>
)


export const GoogleSVG = ({ fill = currentColor, ...props }: SvgProps) => (
  <SvgIcon fill={fill} viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
    />
  </SvgIcon>
)

export const MenuIcon = ({fill = currentColor, ...props}: SvgProps) => (
  <SvgIcon fill={fill} viewBox="0 0 24 24" {...props}>
    <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" />
  </SvgIcon>
)

export const MoonIcon = ({ fill = currentColor, ...props }: SvgProps) => (
  <SvgIcon fill={fill} viewBox="0 0 24 24" {...props}>
    <path d="M12 11.807A9.002 9.002 0 0110.049 2a9.942 9.942 0 00-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 002.735-5.119A9.003 9.003 0 0112 11.807z" />
  </SvgIcon>
)

export const SunIcon = ({ fill = currentColor, ...props }: SvgProps) => (
  <SvgIcon fill={fill} viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M12 16a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 100-12 6 6 0 000 12zM11 0h2v4.062a8.079 8.079 0 00-2 0V0zM7.094 5.68L4.222 2.808 2.808 4.222 5.68 7.094A8.048 8.048 0 017.094 5.68zM4.062 11H0v2h4.062a8.079 8.079 0 010-2zm1.618 5.906l-2.872 2.872 1.414 1.414 2.872-2.872a8.048 8.048 0 01-1.414-1.414zM11 19.938V24h2v-4.062a8.069 8.069 0 01-2 0zm5.906-1.618l2.872 2.872 1.414-1.414-2.872-2.872a8.048 8.048 0 01-1.414 1.414zM19.938 13H24v-2h-4.062a8.069 8.069 0 010 2zM18.32 7.094l2.872-2.872-1.414-1.414-2.872 2.872c.528.41 1.003.886 1.414 1.414z"
      clipRule="evenodd"
    />
  </SvgIcon>
)