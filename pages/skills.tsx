import SkillCard from 'components/containers/Skill/skillCard'
import StatStubView from 'components/containers/Stat/statStubView'
import SelectInput from 'components/forms/SelectInput'
import TextArea from 'components/forms/TextArea'
import TextInput from 'components/forms/TextInput'
import {Card, CardContent, CardTitle} from 'components/ui/Card'
import OpenDialog from 'components/ui/dialogs/openDialog'
import PageLayout from 'components/ui/layouts/Page'
import Semibold from 'components/ui/typography/semibold'
import Typography from 'components/ui/typography/typography'
import { userContext } from 'context/UserContext'
import useDebug from 'hooks/useDebug'
import useRocketQuery from 'hooks/useRocketQuery'
import {Skill, Stat, StatStub} from 'prisma/context'
import {useEffect, useState} from 'react'
import {DEBUG, sendApi} from 'utils/helpers'

const {debug} = useDebug('skills')

const Page = () => {
  const { user, isLoading } = userContext()

  const [isOpen, setIsOpen] = useState(false)
  const [newName, setNewName] = useState<string>()
  const [newDescription, setNewDescription] = useState<string>()
  const [newStat, setNewStat] = useState<Stat>()
  const [valid, setValid] = useState(false)

  const [search, setSearch] = useState('')

  const {
    data: stats, 
    isLoading: statsLoading,
    error: statsError,
    invalidate: invalidateStats
  } = useRocketQuery<StatStub[]>({
    name: 'stat-stubs',
    url: 'stat/stubs'
  })

  const justStats:Stat[] = (stats??[]).map((stat: Stat) => stat as Stat)

  const addSkill = async () => {
    debug('addSkill', {newName, newDescription, newStat, valid})
    if (!valid) { return }
    const result = await sendApi('skill/create', {name: newName, description: newDescription, statId: newStat.id})
    if (result) {
      setNewName(undefined)
      setNewDescription(undefined)
      setNewStat(undefined)
      setIsOpen(false)
      invalidateStats()
    }
  }

  useEffect(() => {
    setValid(() => 
    (newName !== undefined && newName.trim().length>0) && 
    (newDescription !== undefined  && newDescription.trim().length>0) && 
    newStat !== undefined)
  }, [newName, newDescription, newStat])

  return (
    <PageLayout title="Skills" randomSide>
      <Typography className="px-4 bg-neutral/20">
        <p>
          On character creation, you may choose proficiency in 2 skills. Your
          subclass will provide you an additional 2 from a list specific to that
          subclass. Information skills by default use your Intuition modifier,
          but are counted separately from the other skills and will be explained
          later.
        </p>
        <p>
          <Semibold>Why do some skills seem to overlap with others?</Semibold>
        </p>
        <p>
          This is intentional: a problem can often be solved in multiple
          different ways, and there are often multiple ways of reaching the same
          conclusion; your character will approach them in the ways they are
          most familiar with - their proficiencies!
        </p>
      </Typography>

      {user && (
        <div className="text-right py-2 my-1 border-b border-neutral">
        <OpenDialog
          title="Add a New Skill"
          btnLabel="New Skill"
          btnClassname="text-xs btn-sm rounded-full btn-secondary"
          open={isOpen}
          setOpen={setIsOpen}
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

            <SelectInput
              variant="neutral"
              items={justStats}
              item={newStat}
              setItem={setNewStat}
              label="Stat"
            />

            <button
              className="btn btn-info"
              disabled={!valid}
              onClick={addSkill}
            >
              Add Skill
            </button>
          </div>
        </OpenDialog>
        </div>
      )}

      <div className="join min-w-full items-center px-4">
        <TextInput className='join-item bg-neutral/50 my-2' placeholder='Search...' value={search} setValue={setSearch} />
        <button className='btn btn-primary join-item' disabled={search?.length<1} onClick={() => setSearch('')}>Clear</button>
      </div>

      {stats &&
        stats
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .filter((s) => s.cast !== true)
          .map((statStub: StatStub) => (
            <Card className="bg-base-100/20 odd:bg-base-100/30">
              <CardTitle className="bg-base-200/50 border-t border-primary/50 p-4 text-lg text-secondary">
                {statStub.name}
              </CardTitle>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {statStub.skills
                      .filter(
                        (k) =>
                          k.name.toLowerCase().indexOf((search??'').toLowerCase()) >=
                            0 ||
                          k.description
                            .toLowerCase()
                            .indexOf((search??'').toLowerCase()) >= 0
                      )
                      .map((skill: Skill) => (
                        <SkillCard skill={skill} key={skill.id} className='col-span-3 lg:col-span-1' />
                      ))}
                </div>
              </CardContent>
            </Card>
          ))}
    </PageLayout>
  )
}

export default Page
