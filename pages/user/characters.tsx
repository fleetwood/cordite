import PageLayout from 'components/ui/layouts/Page'
import Section from 'components/ui/section'
import Typography from 'components/ui/typography/typography'
import { userContext } from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {CharacterStub} from 'prisma/context'
import React from 'react'

const Page = (props) => {
  const { user } = userContext()

  const {data: characters} = useRocketQuery<CharacterStub[]>({
    name: 'user-characters',
    url: `user/${user?.id}/characters`
  })

  return (
    <PageLayout title="Characters">
      <div className="grid grid-cols-6">
        <Typography className="col-span-2 px-4 bg-neutral h-fit">
          {characters && characters.map(character => (
            <div className="text-primary">{character.name}</div>
          ))}
        </Typography>
        <Section
          className="col-span-4 h-full opacity-70 bg-contain bg-no-repeat"
          backgroundImage="/img/casting.jpg"
          >
          {' '}
        </Section>
      </div>
    </PageLayout>
  )
}

export default Page
