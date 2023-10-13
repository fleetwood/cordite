import HtmlContent from 'components/ui/htmlContent'
import BackgroundImage from 'components/ui/image/backgroundImage'
import PageLayout from 'components/ui/layouts/Page'
import Section from 'components/ui/section'
import Spinner from 'components/ui/spinner'
import Typography from 'components/ui/typography/typography'
import useRocketQuery from 'hooks/useRocketQuery'
import {CharacterDetail} from 'prisma/types'
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

  return (
    <PageLayout>
      <Section title={character?.name ?? ''} titleClass='bg-base-100 text-primary'>
        {isLoading && <Spinner />}
        {character && 
          <div className='grid grid-cols-6 p-4 h-full'>
            <BackgroundImage className='col-span-2' url={character.avatar} />
            <div className='col-span-4'>
              <Typography>
                <h3>{character.charClass.name}</h3>
                <HtmlContent content={character.story} />
              </Typography>
            </div>
          </div>
        }
      </Section>
    </PageLayout>
  )
}

export default Page