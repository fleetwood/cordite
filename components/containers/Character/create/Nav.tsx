import {BackpackIcon,BarchartIcon,CheckmarkIcon,GraduateIcon,UserIcon} from 'components/ui/icons'
import {Dispatch,ReactNode,SetStateAction} from 'react'
import CharCreateStep from './Steps'
import {twMerge} from 'tailwind-merge'

export type StepProps = {
  current?:   number
  step:       number
  setStep:    Dispatch<SetStateAction<number>>
  children?:  ReactNode
  validation: boolean[]
}

const CharCreateNav = (props: StepProps) => {
  return (
    <div className="mt-4 border-t border-primary/30 w-full">
      <h3>Create Character</h3>
      <ul className="my-2 py-4 bg-base-100 steps w-full">
        <CharCreateStep {...props} current={0}>
          <UserIcon className={twMerge("h-8 w-8", props.validation[0] == true ? 'text-success' : '')} />
        </CharCreateStep>
        <CharCreateStep {...props} current={1}>
          <BarchartIcon className={twMerge("h-8 w-8", props.validation[1] == true ? 'text-success' : '')}  />
        </CharCreateStep>
        <CharCreateStep {...props} current={2}>
          <GraduateIcon className={twMerge("h-8 w-8", props.validation[2] == true ? 'text-success' : '')}  />
        </CharCreateStep>
        <CharCreateStep {...props} current={3}>
          <BackpackIcon className={twMerge("h-8 w-8", props.validation[3] == true ? 'text-success' : '')}  />
        </CharCreateStep>
        <CharCreateStep {...props} current={4}>
          <CheckmarkIcon className={twMerge("h-8 w-8", props.validation[4] == true ? 'text-success' : '')}  />
        </CharCreateStep>
      </ul>
    </div>
  )
}

export default CharCreateNav