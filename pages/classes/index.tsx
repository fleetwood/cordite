import {CharClassCard} from "components/containers/CharClass/charClassCard"
import SelectInput from "components/forms/SelectInput"
import TextArea from "components/forms/TextArea"
import TextInput from "components/forms/TextInput"
import OpenDialog from "components/ui/dialogs/openDialog"
import Divider from "components/ui/divider"
import PageLayout from "components/ui/layouts/Page"
import Spinner from "components/ui/spinner"
import Typography from "components/ui/typography/typography"
import {useToast} from "context/ToastContextProvider"
import {userContext} from "context/UserContext"
import useRocketQuery from "hooks/useRocketQuery"
import {CharClassStub} from "prisma/types"
import {useState} from "react"
import {sendApi} from "utils/helpers"

const Page = () => {
  const { user, isLoading, isAdmin} = userContext()
  const {notify, notifyError} = useToast()

  const [open, setOpen] = useState(false)

  const [name, setName] = useState<string>()
  const [avatar, setAvatar] = useState<string>()
  const [banner, setBanner] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [charClassId, setCharClassId] = useState<string>()
    
  const {data: charClasses, isLoading: classesLoading, invalidate} = useRocketQuery<CharClassStub[]>({
    name: 'char-class-stubs',
    url: 'charClass/stubs'
  })

  const chooseParent = (item:{id:string, name:string}) => {
    setCharClassId(() => item?.id ?? undefined)
  }

  const addClass = async () => {
    if (!valid) {
      notifyError()
      return
    }
    const result = await sendApi('charClass/create', {name, banner, avatar, description, charClassId})
    if (result) {
      notify(`${name} was added to classes!`)
      setName(undefined)
      setAvatar(undefined)
      setBanner(undefined)
      setDescription(undefined)
      setCharClassId(undefined)
      invalidate()
      setOpen(false)
    }
  }

  const isValid = (property:string) => property !== undefined && property.trim().length > 0

  const primaryClasses:CharClassStub[] = (charClasses??[]).filter(c => c.parentClass === null)
  const items:{id:string, name: string}[] = [{id: undefined, name: 'None'}, ...primaryClasses.map(p => {return {id: p.id, name: p.name}})]
  const valid = isValid(name) && isValid(description)

  return (
    <PageLayout title="Classes" breadcrumbs={[{label: 'Classes'}]}>
      <Typography className="px-4 bg-neutral/20">
        
        <Divider className="opacity-20" variant="secondary" />

        {classesLoading && <Spinner />}

        {charClasses && (
          <div className="grid md:grid-cols-3 gap-2">
            {charClasses.map((charClass) => (
              <CharClassCard
                className="bg-neutral/30 odd:bg-neutral/50"
                charClass={charClass}
                link
              />
            ))}
          </div>
        )}

        {isAdmin && <Divider className="opacity-20" variant="secondary" />}

        {isAdmin && (
          <OpenDialog
            className="bg-base-100"
            btnLabel="New Class"
            open={open}
            setOpen={setOpen}
          >
            <div>
              <TextInput
                label="Name"
                variant="neutral"
                value={name}
                setValue={setName}
              />
              <TextInput
                label="Banner"
                variant="neutral"
                value={banner}
                setValue={setBanner}
              />
              <TextInput
                label="Avatar"
                variant="neutral"
                value={avatar}
                setValue={setAvatar}
              />
              <TextArea
                label="Description"
                variant="neutral"
                value={description}
                setValue={setDescription}
              />
              <SelectInput
                label="Parent Class"
                items={items}
                item={charClassId}
                setItem={chooseParent}
              />
              <div className="text-right">
                <button
                  className="btn btn-primary"
                  disabled={valid !== true}
                  onClick={addClass}
                >
                  Add
                </button>
              </div>
            </div>
          </OpenDialog>
        )}
      </Typography>
    </PageLayout>
  )
}

export default Page
