import TextArea from 'components/forms/TextArea'
import TextInput from 'components/forms/TextInput'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {StatTree} from 'prisma/context'
import React, {useState} from 'react'
import {sendApi} from 'utils/helpers'

const StatTreeView = () => {
  const { data: user, isLoading } = userContext()

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
      }
    }
  }

  return (
    <div>
      <h3>Tree</h3>
      {statTree && (
        <div className="flex flex-col lg:flex-row gap-2 justify-evenly">
          {statTree
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((s: StatTree, i: number) => (
              <div className="border border-secondary px-2">{s.name}</div>
            ))}
        </div>
      )}
      {user && (
        <div tabIndex={0} className="collapse collapse-arrow bg-base-200 mt-8">
          <div className="collapse-title">Create a New Stat Tree</div>
          <div className="collapse-content">
            {' '}
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
          </div>
        </div>
      )}
    </div>
  )
}

export default StatTreeView