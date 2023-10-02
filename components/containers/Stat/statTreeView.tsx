import TextArea from 'components/forms/TextArea'
import TextInput from 'components/forms/TextInput'
import DialogContainer from 'components/ui/dialog'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {StatTree} from 'prisma/context'
import {Dispatch,ReactNode,SetStateAction,useState} from 'react'
import {DEBUG, sendApi,uuid} from 'utils/helpers'
import StatTreeCard from './statTreeCard'
import StatTreeDetailView from './statTreeDetail'
import useDebug from 'hooks/useDebug'
import OpenDialog from 'components/ui/dialogs/openDialog'

const {debug} = useDebug('statTreeView', DEBUG)

const StatTreeView = (props:{setViewPort:Dispatch<SetStateAction<ReactNode>>}) => {
  const { data: user, isLoading } = userContext()

  const [dialogOpen, setDialogOpen] = useState(false)
  const [newName, setNewName] = useState<string>()
  const [newDescription, setNewDescription] = useState<string>()

  const {
    data: statTree,
    isLoading: statTreeLoading,
    invalidate: invalidateTree,
  } = useRocketQuery<StatTree[]>({
    name: 'stat-tree-all',
    url: 'stat/tree/all',
  })

  const chooseViewport = async (stat:StatTree) => {
    debug('chooseViewPort', {stat})
    props.setViewPort(<StatTreeDetailView id={stat.id} /> )
  }

  const addStat = async () => {
    if (newName && newDescription) {
      const result = await sendApi('stat/tree/create', {
        name: newName,
        description: newDescription,
      })
      if (result) {
        setNewDescription(() => undefined)
        setNewName(() => undefined)
        invalidateTree()
        setDialogOpen(false)
      }
    }
  }

  return (
    <>
      <div className="grid grid-flow-col relative">
        <h3>&nbsp;</h3>
        {user && (
        <div className="absolute right-0">
          <OpenDialog 
            title="Add a Stat" btnLabel="+" 
            btnClassname='btn-sm rounded-full' 
            open={dialogOpen} setOpen={setDialogOpen}
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
              <button className="btn btn-secondary" onClick={addStat}>
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
            .map((s: StatTree, i: number) => (
              <StatTreeCard statTree={s} key={uuid()} className='cursor-pointer border border-primary/0 hover:border-primary/50' onClick={() => chooseViewport(s)} noContent />
            ))}
        </div>
      )}
    </>
  )
}

export default StatTreeView