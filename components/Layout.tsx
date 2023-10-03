import React, { ReactNode, useState } from 'react'
import GoogleLogin from './ui/googleLogin'
import { MenuIcon } from './ui/icons'
import ActiveLink from './ui/links/ActiveLink'
import VmenuLink from './ui/links/VerticalMenuLink'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
}

const sections = [
  {
    label: 'Core',
    link: '/',
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
    label: 'Characters',
    link: '/characters'
  },
]

const NavMenu = () => {
  return (
    <>
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/theme">Theme</ActiveLink>
      <GoogleLogin />
    </>
  )
}

const Layout: React.FC<Props> = (props) => {
  const [activeSection, setActiveSection] = useState('')
  return (
    <main className="grid grid-cols-9 min-h-screen">
      <div
        className="hidden 
    text-primary text-secondary text-accent text-neutral text-base text-warning text-info text-success
    bg-primary bg-secondary bg-accent bg-neutral bg-base bg-warning bg-info bg-success
    border-primary border-secondary border-accent border-neutral border-base border-warning border-info border-success
    text-primary-content text-secondary-content text-accent-content text-neutral-content text-base-content text-warning-content text-info-content text-success-content
    bg-primary-content bg-secondary-content bg-accent-content bg-neutral-content bg-base-content bg-warning-content bg-info-content bg-success-content
    border-primary-content border-secondary-content border-accent-content border-neutral-content border-base-content border-warning-content border-info-content border-success-content

    hover:text-primary hover:text-secondary hover:text-accent hover:text-neutral hover:text-base hover:text-warning hover:text-info hover:text-success
    hover:bg-primary hover:bg-secondary hover:bg-accent hover:bg-neutral hover:bg-base hover:bg-warning bg-info hover:bg-success
    hover:border-primary hover:border-secondary hover:border-accent hover:border-neutral hover:border-base hover:border-warning hover:border-info hover:border-success
    hover:text-primary-content hover:text-secondary-content hover:text-accent-content hover:text-neutral-content hover:text-base-content hover:text-warning-content hover:text-info-content hover:text-success-content
    hover:bg-primary-content hover:bg-secondary-content hover:bg-accent-content hover:bg-neutral-content hover:bg-base-content hover:bg-warning-content hover:bg-info-content hover:bg-success-content
    hover:border-primary-content hover:border-secondary-content hover:border-accent-content hover:border-neutral-content hover:border-base-content hover:border-warning-content hover:border-info-content hover:border-success-content

    "
      ></div>
      <div className="col-span-2 lg:col-span-1">
        <div
          className="min-w-full min-h-full bg-cover"
          style={{ backgroundImage: 'url(img/wallDark.jpg)' }}
        >
          <div className="grid grid-col justify-items-end gap-3 p-2 ">
            <GoogleLogin />
            {sections.map((item: any, i: number) => (
              <VmenuLink
                href={item.link}
                className={twMerge(
                  'min-w-full text-right',
                  item.submenu ? 'text-secondary text-sm' : null
                )}
              >
                {item.label}
              </VmenuLink>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-7 lg:col-span-8 relative">{props.children}</div>
    </main>
  )
}

export default Layout
