import CharClassDetailView from 'components/containers/CharClass/charClassDetail'
import PageLayout from 'components/ui/layouts/Page'
import Spinner from 'components/ui/spinner'
import useRocketQuery from 'hooks/useRocketQuery'
import {CharClassDetail} from 'prisma/context'

export async function getServerSideProps(context: any) {
  const { slug } = context.params
  return { props: { slug } }
}

const Page = ({ slug, ...props }) => {
  const {data: charClass, isLoading, invalidate} = useRocketQuery<CharClassDetail>({
    name: 'char-class',
    url: `charClass/${slug}`
  })

  const title = charClass 
    ? `${charClass.parentClass?.name ? charClass.parentClass?.name + ': ' : ''}${charClass.name}`
    : ''

  return (
    <PageLayout
      title={title}
      bannerImage={
        charClass
          ? `/img/charClasses/${charClass.name.toLowerCase()}-banner.png`
          : undefined
      }
      sideImage={
        charClass
          ? `/img/charClasses/${charClass.name.toLowerCase()}-side.png`
          : undefined
      }
    >
      {isLoading && <Spinner />}
      {charClass && <CharClassDetailView charClass={charClass} invalidate={invalidate} />}
    </PageLayout>
  )
}

export default Page