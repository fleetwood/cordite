import {userContext} from 'context/UserContext'

import Typography from 'components/ui/typography/typography'
import {useState} from 'react'
import {classNameProps} from 'types'

type StatExpViewProps = classNameProps & {

}

const SkillView = (props:StatExpViewProps) => {
  const { user, isLoading } = userContext()
  
  return (
    <div className={props.className}>
      <div className="grid grid-flow-col relative">
        <h3>
          <Typography>Skills</Typography>
        </h3>
      </div>
    </div>
  )}

export default SkillView