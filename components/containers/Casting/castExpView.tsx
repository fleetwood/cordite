import TextArea from 'components/forms/TextArea'
import TextInput from 'components/forms/TextInput'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {CastExpression, CastTree} from 'prisma/context'

import React, {useState} from 'react'
import {sendApi, uuid} from 'utils/helpers'

const CastExpView = () => {
  const { data: user, isLoading } = userContext()

  const [castName, setCastName] = useState<string>()
  const [castDescription, setCastDescription] = useState<string>()
  const [castTreeId, setCastTreeId] = useState<string>()

  const {data: castTree} = useRocketQuery<CastTree[]>({
    name: 'cast-tree-all',
    url: 'cast/tree/all'
  })

  const {
    data: castExps,
    isLoading: castExpLoading,
    invalidate: invalidateTree,
  } = useRocketQuery<CastExpression[]>({
    name: 'cast-exp-all',
    url: 'cast/exp/all',
  })

  const addCast = async () => {
    if (castName && castDescription) {
      const result = await sendApi('cast/exp/create', {
        name: castName,
        description: castDescription,
        castTreeId
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
      <h2>Expressions</h2>
      {castExps && (
        <div className="flex flex-col">
          {castExps.map((c: CastTree, i: number) => (
            <div key={uuid()}>{c.name}</div>
          ))}
        </div>
      )}
      {user && (
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

          <div className='flex flex-col my-2'>
            <label>Tree</label>
            <select 
              className='select w-full'
              onChange={(e) => setCastTreeId(e.currentTarget.value)}
              >
              {castTree && castTree.map((tree: CastTree) => (
                <option value={tree.id}>{tree.name}</option>
              ))}
            </select>
          </div>
          <button className="btn btn-secondary" onClick={addCast}>
            Add Expression
          </button>
        </div>
      )}
    </div>
  )
}

export default CastExpView