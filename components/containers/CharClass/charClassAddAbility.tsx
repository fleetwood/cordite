import HtmlEditor from 'components/forms/HtmlEditor'
import Label from 'components/forms/Label'
import TextInput from 'components/forms/TextInput'
import OpenDialog from 'components/ui/dialogs/openDialog'
import {useToast} from 'context/ToastContextProvider'
import {useState} from 'react'
import {sendApi} from 'utils/helpers'

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

  const isValid = (property:string) => property !== undefined && property.trim().length > 0

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
        <Label label={`Required Level: ${level === 0 ? 'None' : level.toString()}`} />
        <input
          type="range"
          min={0}
          max={10}
          value={level}
          onChange={(e) => setLevel((v) => {
            try {
              return parseInt(e.currentTarget.value)
            } catch (error) {
              return v
            }
          })}
          className="range"
          step="1"
        />
        <div className="w-full flex justify-between text-xs px-2">
          <span>0</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
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