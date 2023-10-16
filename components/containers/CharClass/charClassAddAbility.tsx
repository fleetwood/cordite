import HtmlEditor from 'components/forms/HtmlEditor'
import Label from 'components/forms/Label'
import SelectRange from 'components/forms/SelectRange'
import TextInput from 'components/forms/TextInput'
import OpenDialog from 'components/ui/dialogs/openDialog'
import {useToast} from 'context/ToastContextProvider'
import {useState} from 'react'
import {notNullOrEmpty,sendApi} from 'utils/helpers'

type Props = {
  charClassId: string
  onComplete: () => void
}

const AddAbilityDialog = ({charClassId, ...props}:Props) => {
  const {notify, notifyError} = useToast()
  const [open, setOpen] = useState(false)

  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [level, setLevel] = useState(0)

  const isValid = (property:string) => notNullOrEmpty(property)

  const valid = isValid(name) && isValid(description)

  const save = async () => {
    if (!valid) {
      return
    }
    const result = await sendApi('ability/create', {
      name,
      description,
      level,
      charClassId
    })
    if (result) {
      notify(`Added ${name}!`)
      setName(() => undefined)
      setDescription(() => undefined)
      setLevel(0)
      setOpen(false)
      props.onComplete()
    } else {
      notifyError()
    }
  }

  return (
    <div className="text-right">
      <OpenDialog
        title="Add a New Ability"
        btnLabel="+"
        btnClassname="btn-sm btn-circle"
        open={open}
        setOpen={setOpen}
      >
        <TextInput label="Name" value={name} setValue={setName} />
        <Label
          label={`Required Level: ${level === 0 ? 'None' : level.toString()}`}
        />
        <SelectRange label='level' min={1} max={10} step={1} value={level} setValue={setLevel} />
        <HtmlEditor
          label="Description"
          content={description}
          setContent={setDescription}
          writingToolbar
        />
        <div className="text-right">
          <button className="btn btn-sm" disabled={!valid} onClick={save}>
            Save
          </button>
        </div>
      </OpenDialog>
    </div>
  )
}

export default AddAbilityDialog