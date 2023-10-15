import React from 'react'
import {twMerge} from 'tailwind-merge'
import NavLinks from './NavLinks'
import {useRouter} from 'next/router'

const DesktopNav = () => {
  const router = useRouter()
  const currentPath = router.pathname
  return (
    <div className="hidden md:inline md:col-span-2 xl:col-span-1 relative">
      <div
        className={twMerge(
          'min-w-full min-h-full bg-contain',
          'shadow-lg shadow-black',
          'border-r-[0.5rem] border-base-300/50'
        )}
        style={{ backgroundImage: 'url(/img/wallDark.jpg)' }}
      >
        <NavLinks currentPath={currentPath} />
      </div>
    </div>
  )
}

export default DesktopNav