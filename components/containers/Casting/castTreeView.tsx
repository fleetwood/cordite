import TextArea from 'components/forms/TextArea'
import TextInput from 'components/forms/TextInput'
import OpenDialog from 'components/ui/dialogs/openDialog'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {CastTree} from 'prisma/context'

import React, {useState} from 'react'
import {sendApi, uuid} from 'utils/helpers'

const CastTreeView = () => {
  const { data: user, isLoading } = userContext()

  const [dialogOpen, setDialogOpen] = useState(false)
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
        setDialogOpen(false)
      }
    }
  }
  return (
    <div className='grid grid-flow-col relative'>
      <h2>Tree</h2>
      {user && 
        <OpenDialog 
          btnLabel="+" btnClassname='btn-sm btn-circle btn-secondary'
          title="Add a new Cast Tree"
          open={dialogOpen} setOpen={setDialogOpen}
          >
          <div className="flex flex-col">
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
        </OpenDialog>
      }
      {castTree && (
        <div className="flex flex-col">
          {castTree.sort((a,b) => a.name > b.name ? -1 : 1).map((c: CastTree, i: number) => (
            <div key={uuid()}>{c.name}</div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CastTreeView