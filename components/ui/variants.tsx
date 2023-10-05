import React from 'react'
import {twMerge} from 'tailwind-merge'

type Props = {variants: string[]}

export const Variants = (props:Props) => <div className={twMerge('hidden',props.variants)}></div>
