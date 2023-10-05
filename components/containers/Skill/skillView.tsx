import TextArea from 'components/forms/TextArea'
import TextInput from 'components/forms/TextInput'
import OpenDialog from 'components/ui/dialogs/openDialog'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'

import React, {useState} from 'react'
import {sendApi, uuid} from 'utils/helpers'
import StatCard from './skillCard'
import {classNameProps} from 'types'
import Typography from 'components/ui/typography/typography'
import {Skill, Stat} from 'prisma/context'

type StatExpViewProps = classNameProps & {

}

const SkillView = (props:StatExpViewProps) => {
  const { data: user, isLoading } = userContext()

  const [dialogOpen, setDialogOpen] = useState(false)

  const [statName, setStatName] = useState<string>()
  const [statDescription, setStatDescription] = useState<string>()
  const [statTreeId, setStatTreeId] = useState<string>()
  const [tier, setTier] = useState(1)

  const {data: statTree} = useRocketQuery<Stat[]>({
    name: 'stat-tree-all',
    url: 'stat/tree/all'
  })

  const {
    data: skills,
    isLoading: statLoading,
    invalidate: invalidateTree,
  } = useRocketQuery<Skill[]>({
    name: 'skill-all',
    url: 'stat/exp/all',
  })

  const addStat = async () => {
    if (statName && statDescription) {
      const result = await sendApi('stat/exp/create', {
        name: statName,
        description: statDescription,
        statTreeId
      })
      if (result) {
        setStatDescription(() => undefined)
        setStatName(() => undefined)
        invalidateTree()
        setDialogOpen(false)
      }
    }
  }
  return (
    <div className={props.className}>
      <div className="grid grid-flow-col relative">
        <h3>
          <Typography>Skills</Typography>
        </h3>
        {user && (
          <div className="absolute right-0">
            <OpenDialog
              btnLabel="+"
              btnClassname="btn-sm btn-circle btn-info"
              title="Add a New Skill"
              open={dialogOpen}
              setOpen={setDialogOpen}
            >
              <div className="bg-neutral/50 p-2 flex flex-col">
                <TextInput
                  label="Name"
                  placeholder="Give it a name"
                  value={statName}
                  setValue={setStatName}
                />
                <TextArea
                  label="Description"
                  placeholder="Describe it!"
                  value={statDescription}
                  setValue={setStatDescription}
                />

                <div className="flex flex-col my-2">
                  <p>Tier {tier}</p>
                  <input
                    type="range"
                    min={1}
                    max="3"
                    value={tier}
                    className="range range-primary"
                    step="1"
                    onChange={(e) =>
                      setTier(e.currentTarget.value as unknown as number)
                    }
                  />
                  <div className="w-full flex justify-between text-xs px-2">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </div>
                </div>

                <div className="flex flex-col my-2">
                  <label>Tree</label>
                  <select
                    className="select w-full"
                    onChange={(e) => setStatTreeId(e.currentTarget.value)}
                  >
                    {statTree &&
                      statTree.map((tree: Stat) => (
                        <option value={tree.id}>{tree.name}</option>
                      ))}
                  </select>
                </div>
                <button className="btn btn-secondary" onClick={addStat}>
                  Add Expression
                </button>
              </div>
            </OpenDialog>
          </div>
        )}
      </div>
      {skills && (
        <div className="flex flex-col">
          {skills.map((c: Skill, i: number) => (
            <StatCard key={uuid()} skill={c} />
          ))}
        </div>
      )}
    </div>
  )}

export default SkillView