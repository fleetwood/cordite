import {useRouter} from 'next/router'
import React,{ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'
import {uuid} from 'utils/helpers'
import GoogleLogin from '../googleLogin'
import VmenuLink from '../links/VerticalMenuLink'
import Section,{SectionProps} from '../section'

type Props = SectionProps & {
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
]

const PageLayout: React.FC<Props> = (props) => {
  const currentPath = useRouter().pathname
  return (
    <main className="grid grid-cols-9 min-h-screen">
      <div className="hidden sm:inline sm:col-span-2 lg:col-span-1">
        <div
          className={twMerge(
            'min-w-full min-h-full bg-contain',
            'shadow-lg shadow-black',
            'border-r-[0.5rem] border-base-300/50'
          )}
          style={{ backgroundImage: 'url(img/wallDark.jpg)' }}
        >
          <div className="grid grid-col justify-items-end gap-3 p-2">
            <GoogleLogin />
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
                  item.link === currentPath
                    ? 'text-secondary to-secondary/50'
                    : ''
                )}
                selected={item.link === currentPath}
                key={uuid()}
              >
                {item.label}
              </VmenuLink>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-9 sm:col-span-7 lg:col-span-8 relative pageMesh">
        <Section
          title={props.title}
          titleClass={twMerge(
            'text-secondary shadow-md shadow-black px-4',
            props.titleClass
          )}
          className={twMerge('p-4 bg-cover h-full', props.className)}
        >
          {props.children}
        </Section>
      </div>
    </main>
  )
}

export default PageLayout
