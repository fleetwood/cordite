import TextArea from 'components/forms/TextArea'
import TextInput from 'components/forms/TextInput'
import OpenDialog from 'components/ui/dialogs/openDialog'
import {userContext} from 'context/UserContext'
import useDebug from 'hooks/useDebug'
import useRocketQuery from 'hooks/useRocketQuery'
import {DEBUG,sendApi,uuid} from 'utils/helpers'
import StatCard from './statCard'
import {classNameProps} from 'types'
import {useState} from 'react'
import {Stat} from 'prisma/context'
import {twMerge} from 'tailwind-merge'
import Toggle from 'components/ui/toggle'

const {debug} = useDebug('statTreeView', DEBUG)

type StatTreeViewProps = classNameProps & {

}

const StatView = (props:StatTreeViewProps) => {
  const { data: user, isLoading } = userContext()

  const [dialogOpen, setDialogOpen] = useState(false)
  const [newName, setNewName] = useState<string>()
  const [newDescription, setNewDescription] = useState<string>()
  const [cast, setCast] = useState(false)

  const {
    data: statTree,
    isLoading: statTreeLoading,
    invalidate: invalidateTree,
  } = useRocketQuery<Stat[]>({
    name: 'stat-tree-all',
    url: 'stat/tree/all',
  })

  const addStat = async () => {
    if (newName && newDescription) {
      const result = await sendApi('stat/tree/create', {
        name: newName,
        description: newDescription,
        cast
      })
      if (result) {
        setNewDescription(undefined)
        setNewName(undefined)
        setCast(false)
        invalidateTree()
        setDialogOpen(false)
      }
    }
  }

  return (
    <div className={props.className}>
      <div className="grid grid-flow-col relative">
        <h3>&nbsp;</h3>
        {user && (
          <div className="absolute right-0">
            <OpenDialog
              title="Add a Stat"
              btnLabel="+"
              btnClassname="btn-sm btn-circle btn-secondary"
              open={dialogOpen}
              setOpen={setDialogOpen}
            >
              <div>
                <TextInput
                  label="Name"
                  placeholder="Give it a name"
                  value={newName}
                  setValue={setNewName}
                />
                <TextArea
                  label="Description"
                  placeholder="Describe it!"
                  value={newDescription}
                  setValue={setNewDescription}
                />
                <Toggle label='Cast Stat?' value={cast} setValue={setCast} 
                className='my-2' background yn
                />
                <button className="btn btn-info" onClick={addStat}>
                  Add Stat
                </button>
              </div>
            </OpenDialog>
          </div>
        )}
      </div>
      {statTree && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 justify-evenly">
          {statTree
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((s: Stat, i: number) => (
              <StatCard
                className="cursor-pointer border border-primary/0 hover:border-primary/50"
                stat={s}
                key={uuid()}
                noContent
              />
            ))}
        </div>
      )}
    </div>
  )
}

export default StatView