import TextArea from 'components/forms/TextArea'
import TextInput from 'components/forms/TextInput'
import OpenDialog from 'components/ui/dialogs/openDialog'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {CastExpression,CastTree} from 'prisma/context'

import {useState} from 'react'
import {classNameProps} from 'types'
import {sendApi,uuid} from 'utils/helpers'
import CastExpCard from './castExpCard'
import Typography from 'components/ui/typography/typography'

type CastExpViewProps = classNameProps & {

}

const CastExpView = (props:CastExpViewProps) => {
  const { data: user, isLoading } = userContext()

  const [open, setOpen ] = useState(false)
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
    <div className={props.className}>
      <div className="grid grid-flow-col relative">
        <h3>
          <Typography>Skills*</Typography>
        </h3>
        {user && (
          <div className="absolute right-0">
            <OpenDialog
              btnLabel="+"
              btnClassname="btn-sm btn-circle btn-info"
              title="Add a New Cast Skill"
              open={open}
              setOpen={setOpen}
            >
              <div className="bg-neutral/50 p-2 flex flex-col">
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

                <div className="flex flex-col my-2">
                  <label>Tree</label>
                  <select
                    className="select w-full"
                    onChange={(e) => setCastTreeId(e.currentTarget.value)}
                  >
                    {castTree &&
                      castTree.map((tree: CastTree) => (
                        <option value={tree.id}>{tree.name}</option>
                      ))}
                  </select>
                </div>
                <button className="btn btn-secondary" onClick={addCast}>
                  Add Expression
                </button>
              </div>
            </OpenDialog>
          </div>
        )}
      </div>
      {castExps && (
        <div className="flex flex-col">
          {castExps.map((c: CastExpression, i: number) => (
            <CastExpCard exp={c} key={uuid()} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CastExpView