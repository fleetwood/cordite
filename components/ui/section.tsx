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
    sideImage?: string
    sideClass?: string
    randomSide?: boolean
  }

const Section = ({children, ...props}:SectionProps) => {
  const banner = props.bannerImage ? props.bannerImage : props.randomBanner ? useRandomBanner() : undefined
  const side = props.sideImage ? props.sideImage : props.randomSide ? useRandomSide() : undefined
  
  return (
    <div className="bg-base-200/50 grid grid-cols-6 justify-start h-full">
      <div
        className={twMerge(
          'h-full col-span-6',
          side ? ' xl:col-span-4' : ''
        )}
      >
        {banner && (
          <BackgroundImage
            url={banner}
            className={twMerge('xl:hidden h-[200px] md:h-[300px]',
              props.bannerClass
            )}
          />
        )}
        {props.title && (
          <h2 className={twMerge('font-fraunces p-2', props.titleClass)}>
            {props.title}
          </h2>
        )}
        {children}
      </div>
      {side && (
        <BackgroundImage className="hidden xl:inline col-span-2" url={side} cover />
      )}
    </div>
  )
}

export default Section