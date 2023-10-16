import {CharStat} from '@prisma/client'
import HtmlContent from 'components/ui/htmlContent'
import BackgroundImage from 'components/ui/image/backgroundImage'
import PageLayout from 'components/ui/layouts/Page'
import Section from 'components/ui/section'
import Spinner from 'components/ui/spinner'
import Semibold from 'components/ui/typography/semibold'
import Typography from 'components/ui/typography/typography'
import useRocketQuery from 'hooks/useRocketQuery'
import {CharStatStub, CharacterDetail} from 'prisma/types'
import React from 'react'

type Props = {
  id: string
}

export async function getServerSideProps(context: any) {
  const {id} = context.params
  return { props: { id }}
}

const Page = ({id, ...props}:Props) => {

  const { data: character, isLoading } = useRocketQuery<CharacterDetail>({
    name: `character-${id}`,
    url: `character/${id}`,
  })

  const StatCard = ({stat}:{stat:CharStatStub}) => {
    return (
      <div className='flex gap-2'>
        <Semibold>{stat.stat.name}</Semibold>: <span>{stat.level}</span>
      </div>
    )
  }

  return (
    <PageLayout>
      <Section title={character?.name ?? ''} titleClass='bg-base-100 text-primary'>
        {isLoading && <Spinner />}
        {character && 
          <div className='grid grid-cols-6 p-4 h-screen'>
            <BackgroundImage className='col-span-2 h-full' url={character.avatar} />
            <div className='col-span-4 px-4'>
              <h3 className='border-b border-primary'>{character.charClass.name}</h3>
              <h4>Level {character.level}</h4>
              <div className='grid grid-cols-3'>
                {character.stats.map((stat:CharStatStub) => (
                  <StatCard stat={stat} key={stat.id} />
                ))}
              </div>
            </div>
          </div>
        }
      </Section>
    </PageLayout>
  )
}

export default Page