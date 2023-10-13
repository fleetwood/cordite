import ReactHtmlParser from 'react-html-parser'
import { twMerge } from 'tailwind-merge'
import {classNameProps} from 'types'

type HtmlContentProps = classNameProps & {
  content: string
  limit?: number
}

export const HtmlContent = ({
  content,
  limit,
  ...props
}: HtmlContentProps) => (
  <div className={props.className}>
    <>{ReactHtmlParser(content)}</>
  </div>
)
export default HtmlContent
