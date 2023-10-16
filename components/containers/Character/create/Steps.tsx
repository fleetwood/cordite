import {twMerge} from "tailwind-merge"
import {StepProps} from "./Nav"

const CharCreateStep = (props: StepProps) => {
  return (
    <li
      className={twMerge(
        'step cursor-pointer hover:step-info hover:text-info group',
        props.validation[props.current] === true ? 'step-success text-success-content' :
        props.current === props.step ? 'step-primary text-primary' : 
        ''
      )}
      onClick={() => props.setStep(props.current)}
    >
      {props.children}
    </li>
  )
}

export default CharCreateStep
