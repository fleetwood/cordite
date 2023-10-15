import { GearboxIcon } from 'components/ui/icons'
import { useRouter } from 'next/router'
import React from 'react'
import NavLinks from './NavLinks'

const MobileNav = () => {
  const router = useRouter()
  const currentPath = router.pathname
  return (
    <div className="md:hidden drawer absolute z-50 w-max">
      <input id="mobile-menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="mobile-menu"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu pt-10 p-4 w-80 min-h-full bg-base-200 ">
          <label
            htmlFor="mobile-menu"
            className="btn btn-neutral drawer-button sm:hidden"
          >
            <GearboxIcon className="text-primary h-8 w-8" />
          </label>
          <NavLinks currentPath={currentPath} mobile />
        </div>
      </div>
    </div>
  )
}

export default MobileNav
