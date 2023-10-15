
import StatView from "components/containers/Stat/statView"
import TextArea from "components/forms/TextArea"
import TextInput from "components/forms/TextInput"
import OpenDialog from "components/ui/dialogs/openDialog"
import PageLayout from "components/ui/layouts/Page"
import Section from "components/ui/section"
import Toggle from "components/ui/toggle"
import Ital from "components/ui/typography/ital"
import Typography from "components/ui/typography/typography"
import {userContext} from "context/UserContext"
import useRocketQuery from "hooks/useRocketQuery"
import {Stat} from "prisma/context"
import {useState} from "react"
import {sendApi} from "utils/helpers"

const Page = () => {
  const { isAdmin } = userContext()

  const [dialogOpen, setDialogOpen] = useState(false)
  const [newName, setNewName] = useState<string>()
  const [newDescription, setNewDescription] = useState<string>()
  const [cast, setCast] = useState(false)

  const {
    data: stats,
    isLoading: statsLoading,
    invalidate: invalidateStats,
  } = useRocketQuery<Stat[]>({
    name: 'stat-all',
    url: 'stat',
  })

  const addStat = async () => {
    if (newName && newDescription) {
      const result = await sendApi('stat/create', {
        name: newName,
        description: newDescription,
        cast,
      })
      if (result) {
        setNewDescription(undefined)
        setNewName(undefined)
        setCast(false)
        invalidateStats()
        setDialogOpen(false)
      }
    }
  }

  return (
    <PageLayout title="Stats">
      {isAdmin && (
        <div className="text-right py-2 my-1 border-b border-neutral">
        <OpenDialog
          title="Add a Stat"
          btnLabel="New Stat"
          btnClassname="text-xs btn-sm rounded-full btn-accent"
          open={dialogOpen}
          setOpen={setDialogOpen}
        >
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
            <Toggle
              label="Cast Stat?"
              value={cast}
              setValue={setCast}
              className="my-2"
              background
              yn
            />
            <button className="btn btn-info" onClick={addStat}>
              Add Stat
            </button>
          </div>
        </OpenDialog>
        </div>
      )}
      <Section
        title="Physical Stats"
        titleClass="mt-5 text-secondary uppercase text-xl bg-neutral/20 shadow shadow-black"
        >
        <StatView physicalStats />
      </Section>
      <Section
        title="Casting Stats"
        titleClass="mt-5 text-secondary uppercase text-xl bg-neutral/20 shadow shadow-black"
      >
        <StatView castingStats />
      </Section>
    </PageLayout>
  )
}

export default Page
