import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { uuid } from 'utils/helpers'
import GoogleLogin from '../googleLogin'
import VmenuLink from '../links/VerticalMenuLink'
import Section, { SectionProps } from '../section'
import { GearboxIcon } from '../icons'
import NavMenu from './NavMenu'

type Props = SectionProps & {
  requireLogin?: boolean
  children: ReactNode
}

const PageLayout: React.FC<Props> = ({
  requireLogin = true,
  ...props
}: Props) => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const currentPath = router.pathname

  if (requireLogin && status === 'unauthenticated') {
    router.push('/')
  }

  return (
    <main className="grid grid-cols-9 h-screen">
      <div className="md:hidden drawer absolute z-50 w-max">
        <input id="mobile-menu" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="mobile-menu"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-base-200 ">
            <label
              htmlFor="mobile-menu"
              className="btn btn-neutral drawer-button sm:hidden"
            >
              <GearboxIcon className="text-primary h-8 w-8" />
            </label>
            <NavMenu currentPath={currentPath} mobile />
          </div>
        </div>
      </div>
      <div className="hidden md:inline md:col-span-2 relative">
        <div
          className={twMerge(
            'min-w-full min-h-full bg-contain',
            'shadow-lg shadow-black',
            'border-r-[0.5rem] border-base-300/50'
          )}
          style={{ backgroundImage: 'url(img/wallDark.jpg)' }}
        >
          <NavMenu currentPath={currentPath} />
        </div>
      </div>
      <div className="overflow-y-scroll scrollbar-hide col-span-9 md:col-span-7 relative pageMesh">
        <div className="md:hidden sticky top-0 z-50 bg-base-100 col-span-8 grid grid-cols-2 items-center">
          <div>
            <label
              htmlFor="mobile-menu"
              className="btn btn-neutral drawer-button p-2 m-2"
            >
              <GearboxIcon className="text-primary h-8 w-8" />
            </label>
          </div>
          <div className="text-right text-4xl pr-2 font-fraunces font-semibold text-primary">
            CORDITE
          </div>
        </div>
        {status === 'loading' ? (
          <div>...</div>
        ) : (
          (requireLogin === false || status === 'authenticated') && (
            <Section
              title={props.title}
              titleClass={twMerge(
                'text-secondary shadow-md shadow-black px-4',
                props.titleClass
              )}
              className={twMerge('p-4 bg-cover h-full', props.className)}
            >
              {props.children}
              <div className="sticky bottom-0 text-center p-1 bg-base-100">
                Copyright &copy;2021 John Fleetwood
              </div>
            </Section>
          )
        )}
      </div>
    </main>
  )
}

export default PageLayout
