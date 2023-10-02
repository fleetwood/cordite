import VmenuLink from 'components/ui/links/VerticalMenuLink'
import {ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'

export type MenuItem = {
  link: string
  children: ReactNode | string
  submenu?: MenuItem[]
}

type MenuItemProps =classNameProps & {
  item: MenuItem
  onClick: (item) => void
}

const MenuItemLink = (props:MenuItemProps) => {
  return (
    <div className='flex flex-col'>
      <VmenuLink className={twMerge('text-right', props.className)} onClick={() => props.onClick(props.item.link)}>
        {props.item.link}
      </VmenuLink>
      {props.item.submenu?.map((s,i) => <MenuItemLink item={s} onClick={() => props.onClick(s.link)} className='text-secondary text-sm' />)}
    </div>
  )
}

export default MenuItemLink