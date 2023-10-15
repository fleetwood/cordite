import {useRandomBanner, useRandomSide} from 'hooks/useRandomBanner'
import React, {ReactNode, useEffect} from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps, variantProps} from 'types'
import BackgroundImage from './image/backgroundImage'

export type SectionProps = classNameProps &
  variantProps & {
    title?: string
    children: ReactNode | string
    titleClass?: string
    bannerImage?: string
    bannerClass?: string
    randomBanner?: boolean
  }

const Section = ({children, ...props}:SectionProps) => {
  const banner = props.bannerImage ? props.bannerImage : props.randomBanner ? useRandomBanner() : undefined
  
  return (
    <div 
      className={twMerge(
        'flex flex-col',
        'bg-base-200/50 justify-start',
        props.className
      )}>
        {(banner || props.title) &&
          <div className="m-2">
            {banner && (
              <BackgroundImage
                url={banner}
                className={twMerge(
                  'xl:hidden h-[200px] md:h-[300px]',
                  props.bannerClass
                )}
              />
            )}
            {props.title && (
              <h2 className={twMerge('font-fraunces p-2', props.titleClass)}>
                {props.title}
              </h2>
            )}
          </div>
        }
        <div className="m-2">
          {children}
        </div>
      </div>
  )
}

export default Section