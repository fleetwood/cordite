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
import {uuid} from 'utils/helpers'
import Link from 'next/link'

type Props = SectionProps & {
  requireLogin?:    boolean
  children:         ReactNode | ReactNode[]
  dark?:            boolean
  backgroundImage?: string
  banner?:          string
  sideImage?:       string
  sideClass?:       string
  randomSide?:      boolean
  breadcrumbs?:     {label:string, url: string}[]
}

const PageLayout: React.FC<Props> = ({
  requireLogin = true,
  backgroundImage,
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
      {backgroundImage && (
        <BackgroundImage
          url={backgroundImage}
          className="z-0 absolute top-0 col-span-9 left-0 w-screen h-screen"
        />
      )}
      <Toasts />
      <Navigation />
      <div
        className={twMerge(
          'h-screen flex flex-col z-1',
          side !== undefined
            ? 'col-span-9 md:col-span-7 xl:col-span-6'
            : 'col-span-9 md:col-span-8'
        )}
      >
        <MobileHeader />
        {props.breadcrumbs && (
          <div className="text-sm breadcrumbs pl-2 col-span-7 overflow-hidden">
            <ul>
              {props.breadcrumbs.map(b => (
                <li key={uuid()}><Link href={b.url}>{b.label}</Link></li>
              ))}
            </ul>
          </div>
        )}

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
