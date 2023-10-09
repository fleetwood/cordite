import React from 'react'
import {twMerge} from 'tailwind-merge'
import {uuid} from 'utils/helpers'
import VmenuLink from '../links/VerticalMenuLink'
import {useSession} from 'next-auth/react'
import GoogleLogin from '../googleLogin'

const NavMenu = (props:{currentPath: string, mobile?: boolean}) => {
  const { status } = useSession()

  const sections = status === 'authenticated' ? [
  {
    label: 'Core',
    link: '/',
    noLogin: true
  },
  {
    label: 'System',
    link: '/system',
    submenu: true
  },
  {
    label: 'Health',
    link: '/health',
    submenu: true,
  },
  {
    label: 'Levels',
    link: '/levels',
    submenu: true
  },
  {
    label: 'RAD',
    link: '/rad',
    submenu: true,
  },
  {
    label: 'Stats',
    link: '/stats'
  },
  {
    label: 'Skills',
    link: '/skills'
  },
  {
    label: 'Equipment',
    link: '/equipment'
  },
  {
    label: 'Melee',
    link: '/melee',
    submenu: true
  },
  {
    label: 'Ranged',
    link: '/ranged',
    submenu: true
  },
  {
    label: 'Classes',
    link: '/classes'
  },
  {
    label: 'Characters',
    link: '/characters'
  },
  {
    label: 'Theme',
    link: '/theme'
  },
]:[]

  return (
    <div className="grid grid-col justify-items-end gap-3 p-2">
      <GoogleLogin mobile />
      <div className="border-t-4 border-primary/20 min-w-full"></div>
      {sections.map((item: any, i: number) => (
        <VmenuLink
          href={item.link}
          className={twMerge(
            'min-w-full text-right bg-opacity-0',
            'bg-gradient-to-r from-transparent to-neutral/50 hover:text-primary-content rounded-lg',
            item.submenu
              ? 'font-normal opacity-80'
              : 'uppercase font-bold',
            item.link === props.currentPath
              ? 'text-secondary to-secondary/50'
              : ''
          )}
          selected={item.link === props.currentPath}
          key={uuid()}
        >
          {item.label}
        </VmenuLink>  
      ))}
  </div>
)}

export default NavMenu