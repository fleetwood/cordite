import TextArea from 'components/forms/TextArea'
import TextInput from 'components/forms/TextInput'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {CastTree} from 'prisma/context'

import React, {useState} from 'react'
import {sendApi, uuid} from 'utils/helpers'

const CastTreeView = () => {
  const { data: user, isLoading } = userContext()

  const [castName, setCastName] = useState<string>()
  const [castDescription, setCastDescription] = useState<string>()

  const {
    data: castTree,
    isLoading: castTreeLoading,
    invalidate: invalidateTree,
  } = useRocketQuery<CastTree[]>({
    name: 'cast-tree-all',
    url: 'cast/tree/all',
  })

  const addCast = async () => {
    if (castName && castDescription) {
      const result = await sendApi('cast/tree/create', {
        name: castName,
        description: castDescription,
      })
      if (result) {
        setCastDescription(undefined)
        setCastName(undefined)
        invalidateTree()
      }
    }
  }
  return (
    <div>
      <h2>Tree</h2>
      {castTree && (
        <div className="flex flex-col">
          {castTree.sort((a,b) => a.name > b.name ? -1 : 1).map((c: CastTree, i: number) => (
            <div key={uuid()}>{c.name}</div>
          ))}
        </div>
      )}
      {user && (
        <div tabIndex={0} className="collapse collapse-arrow bg-base-200 mt-8">
          <div className="collapse-title">Create a New Cast Tree</div>
          <div className="collapse-content">
            <div className="rounded bg-neutral/50 p-2 flex flex-col">
              <TextInput
                label="Name"
                placeholder="Give it a name"
                value={castName}
                setValue={setCastName}
              />
              <TextArea
                label="Description"
                placeholder="Describe it!"
                value={castDescription}
                setValue={setCastDescription}
              />
              <button className="btn btn-secondary" onClick={addCast}>
                Add Cast
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CastTreeView