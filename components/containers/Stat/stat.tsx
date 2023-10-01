import TextArea from 'components/forms/TextArea'
import TextInput from 'components/forms/TextInput'
import Section from 'components/ui/section'
import Spinner from 'components/ui/spinner'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {StatTree} from 'prisma/context'
import {useState} from 'react'
import {classNameProps} from 'types'
import {sendApi} from 'utils/helpers'

const StatSection = (props:classNameProps) => {
  const {data: user, isLoading} = userContext()

  const [newName, setNewName] = useState<string>()
  const [newDescription, setNewDescription] = useState<string>()

  const {data: statTree, isLoading: statTreeLoading, invalidate: invalidateTree} = useRocketQuery<StatTree[]>({name: 'stat-tree-all', url: 'stat/tree/all'})

  const addStat = async () => {
    if (newName && newDescription) {
      const result = await sendApi('stat/tree/create', {name: newName, description: newDescription})
      if (result) {
        setNewDescription(undefined)
        setNewName(undefined)
        invalidateTree()
      }
    }
  }

  return (
    <Section className={props.className} title="Stat Tree">
      {isLoading || (statTreeLoading && <Spinner />)}
      {user && (
        <div className='rounded bg-neutral/50 p-2 flex flex-col'>
          <TextInput label='Name' placeholder='Give it a name' value={newName} setValue={setNewName} />
          <TextArea label='Description' placeholder='Describe it!' value={newDescription} setValue={setNewDescription} />
          <button className="btn btn-secondary" onClick={addStat}>Add Stat</button>
        </div>
      )}
      {statTree && (
        <div className="grid grid-cols-2">
          {statTree.map((s: StatTree, i: number) => (
            <div>{s.name}</div>
          ))}
        </div>
      )}
    </Section>
  )}

export default StatSection
