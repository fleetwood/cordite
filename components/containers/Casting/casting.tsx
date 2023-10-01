import TextArea from 'components/forms/TextArea'
import TextInput from 'components/forms/TextInput'
import Section from 'components/ui/section'
import Spinner from 'components/ui/spinner'
import { userContext } from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import { CastTree, StatTree } from 'prisma/context'
import { useState } from 'react'
import { classNameProps } from 'types'
import { sendApi, uuid } from 'utils/helpers'

const CastingSection = (props: classNameProps) => {
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
    <Section className={props.className} title="Casting Tree">
      {(isLoading || castTreeLoading) && <Spinner />}
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
          <button className="btn btn-secondary" onClick={addCast}>
            Add Cast
          </button>
        </div>
      )}
      {castTree && (
        <div className="flex flex-col">
          {castTree.map((c:CastTree, i:number) => (
            <div key={uuid()}>{c.name}</div>
          ))}
        </div>
      )}
    </Section>
  )
}

export default CastingSection
