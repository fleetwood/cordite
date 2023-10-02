import React,{ReactNode, useState} from 'react'
import GoogleLogin from './ui/googleLogin'
import {MenuIcon} from './ui/icons'
import ActiveLink from './ui/links/ActiveLink'
import VmenuLink from './ui/links/VerticalMenuLink'
import {twMerge} from 'tailwind-merge'

type Props = {
  children: ReactNode
}

  const sections = [
    {
      label: 'Cordite',
      link: '/core',
      submenu: [
        {
          link: 'Core',
          children: <>Core</>,
        },
        {
          link: 'Health',
          children: <>Health</>,
        },
        {
          link: 'Levels',
          children: <>Levels</>,
        },
        {
          link: 'RAD',
          children: <>RADs</>,
        },
      ],
    },
    {
      label: 'Character Expressions',
      link: '/characters',
      children: <>CharExpressions</>,
    },
    {
      label: 'Stat Tree',
      link: '/stats',
      children: <>Stat</>,
    }
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
    // const activeClass = (item: MenuItem) =>
    //   twMerge(
    //     'absolute transition-all duration-200 ease-out',
    //     item.link === activeSection
    //       ? 'opacity-100 scale-y-100 z-1'
    //       : 'opacity-0 scale-y-0 z-0'
    //   )

  return (
  <div className="drawer">
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
    <input id="mainMenuDrawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">
      {/* Navbar */}
      <div className="w-full navbar bg-base-300 sticky top-0 z-50">
        <div className="flex-none lg:hidden">
          <label htmlFor="mainMenuDrawer" className="btn btn-square btn-ghost">
            <MenuIcon className="text-primary" />
          </label>
        </div>
        <div className="flex-1 px-2 mx-2 text-6xl text-primary justify-center font-fraunces">
          CORDITE
        </div>
        <div className="hidden lg:flex gap-2 items-center">
          <NavMenu />
        </div>
      </div>
      <div className="grid">
        <main className="grid grid-cols-5 min-h-screen">
          <div className="col-span-1 flex flex-col pr-4 text-xl bg-gradient-to-b from-base-200 to-base-100">
            <div className="flex flex-col">
              {sections.map((item: any, i: number) => (
                <VmenuLink
                  href={item.link}
                  className={twMerge('text-right')}
                >
                  {item.label}
                </VmenuLink>
              ))}
            </div>
          </div>
          <div className="col-span-4 relative">{props.children}</div>
        </main>
      </div>
    </div>
    <div className="drawer-side">
      <label htmlFor="mainMenuDrawer" className="drawer-overlay"></label>
      <div className="menu pt-20 p-4 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
        <NavMenu />
      </div>
    </div>
  </div>
)}

export default Layout
