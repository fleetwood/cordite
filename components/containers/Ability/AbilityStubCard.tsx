import {Card,CardContent,CardTitle} from 'components/ui/Card'
import Divider from 'components/ui/divider'
import HtmlContent from 'components/ui/htmlContent'
import Ital from 'components/ui/typography/ital'
import {CharAbilityStub} from 'prisma/context'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'

type Props = classNameProps & {
  ability: CharAbilityStub
  noDescription?: boolean
}

const AbilityStubCard = ({ability, ...props}:Props) => {
  return (
    <Card
      className={twMerge(
        'bg-neutral/20 odd:bg-neutral/30 group',
        props.className
      )}
    >
      <CardContent className="flex gap-2 items-center">
        <h3 className="text-lg">{ability.ability?.name}</h3>
        <Ital>Level {ability.level}</Ital>
      </CardContent>
      {props.noDescription === undefined && (
        <CardContent>
          {ability.level > 0 && (
            <div className="italic">Level {ability.level} Ability</div>
          )}
          <Divider variant="neutral" className="opacity-20" />
          <HtmlContent content={ability.ability?.description} />
        </CardContent>
      )}
    </Card>
  )
}

export default AbilityStubCard