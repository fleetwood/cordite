import CharacterCard from 'components/containers/Character/characterCard'
import PageLayout from 'components/ui/layouts/Page'
import Section from 'components/ui/section'
import Spinner from 'components/ui/spinner'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {CharClassDetail} from 'prisma/types'

export async function getServerSideProps(context: any) {
  const { slug } = context.params
  return { props: { slug } }
}

const Page = ({ slug, ...props }) => {
  const {isAdmin, isDM} = userContext()
  const {data: charClass, isLoading} = useRocketQuery<CharClassDetail>({
    name: 'char-class',
    url: `charClass/${slug}`
  })

  const title = charClass 
    ? `${charClass.parentClass?.name ? charClass.parentClass?.name + ': ' : ''}${charClass.name}`
    : ''

  return (
    <PageLayout title={title}>
      <Section>
        {isLoading && <Spinner />}
        {charClass && (
          <div className="bg-base-200/50 flex flex-col gap-4">
            <div>{charClass.description}</div>
            <div>
              <Section
                titleClass="bg-base-100 text-primary text-2xl border-t border-primary/50"
                title="Abilities"
              >
                {charClass.abilities.map((ability) => (
                  <div>{ability.name}</div>
                ))}
              </Section>
            </div>
            {(isAdmin || isDM) && (
              <div>
                <Section
                  titleClass="bg-base-100 text-primary text-2xl border-t border-primary/50"
                  title={`Characters (${charClass.characters.length})`}
                >
                  {charClass.characters.map((char) => (
                    <CharacterCard character={char} />
                  ))}
                </Section>
              </div>
            )}
          </div>
        )}
      </Section>
    </PageLayout>
  )
}

export default Page