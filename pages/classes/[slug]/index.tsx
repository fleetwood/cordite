import CharClassDetailView from 'components/containers/CharClass/charClassDetail'
import PageLayout from 'components/ui/layouts/Page'
import Section from 'components/ui/section'
import Spinner from 'components/ui/spinner'
import useRocketQuery from 'hooks/useRocketQuery'
import {CharClassDetail} from 'prisma/context'

export async function getServerSideProps(context: any) {
  const { slug } = context.params
  return { props: { slug } }
}

const Page = ({ slug, ...props }) => {
  const {data: charClass, isLoading} = useRocketQuery<CharClassDetail>({
    name: 'char-class',
    url: `charClass/${slug}`
  })

  const title = charClass 
    ? `${charClass.parentClass?.name ? charClass.parentClass?.name + ': ' : ''}${charClass.name}`
    : ''

  return (
    <PageLayout title={title}>
      <Section className='h-full'>
        {isLoading && <Spinner />}
        {charClass && (
          <CharClassDetailView charClass={charClass} />
        )}
      </Section>
    </PageLayout>
  )
}

export default Page