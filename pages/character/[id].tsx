import PageLayout from 'components/ui/layouts/Page'
import Section from 'components/ui/section'
import Spinner from 'components/ui/spinner'
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
      <Section>
        {isLoading && <Spinner />}
        {character && <div>{character.name}</div>}
      </Section>
    </PageLayout>
  )
}

export default Page