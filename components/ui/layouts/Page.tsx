import {useRandomSide} from 'hooks/useRandomBanner'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import React,{ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'
import BackgroundImage from '../image/backgroundImage'
import Section,{SectionProps} from '../section'
import Toasts from '../toasts'
import Semibold from '../typography/semibold'
import Navigation from './navigation'
import MobileHeader from './navigation/MobileHeader'

type Props = SectionProps & {
  requireLogin?: boolean
  children: ReactNode
  dark?: boolean
  banner?: string
  sideImage?: string
  sideClass?: string
  randomSide?: boolean
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
  const side = props.sideImage
    ? props.sideImage
    : props.randomSide
    ? useRandomSide()
    : undefined

  return (
    <main className="grid grid-cols-9 h-screen pageMesh">
      <Toasts />
      <Navigation />
      <div
        className={twMerge(
          'h-screen flex flex-col',
          side !== undefined
            ? 'col-span-9 md:col-span-5 xl:col-span-6'
            : 'col-span-9 md:col-span-7 xl:col-span-8 '
        )}
      >
        <MobileHeader />
        {status === 'loading' ? (
          <div>...</div>
        ) : (
          (requireLogin === false || status === 'authenticated') && (
            <Section
              title={props.title}
              titleClass={twMerge(
                'text-primary',
                props.dark
                  ? 'shadow-md shadow-black px-4'
                  : 'bg-base-100 border-b border-neutral/50',
                props.titleClass
              )}
              className={twMerge(
                'h-full overflow-y-scroll scrollbar-hide',
                props.className
              )}
              {...props}
            >
              {props.children}
            </Section>
          )
        )}
        <div className="text-center p-1 bg-base-100 mt-4 text-sm">
          <Semibold>CORDITE role-playing system</Semibold> Copyright &copy;2021
          John Fleetwood
        </div>
      </div>
      {side && (
        <BackgroundImage
          className="hidden xl:inline col-span-2"
          url={side}
          cover
        />
      )}
    </main>
  )
}

export default PageLayout
