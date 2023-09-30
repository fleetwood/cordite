import {userContext} from 'context/UserContext'
import {BuiltInProviderType} from 'next-auth/providers'
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn
} from 'next-auth/react'
import {useEffect,useState} from 'react'
import useVariants from 'src/hooks/useVariants'
import {twMerge} from 'tailwind-merge'
import {classNameProps,variantProps} from 'types'
import {GoogleSVG} from './icons'

type MenuLoginProps = classNameProps & variantProps & {
}

const GoogleLogin = (props: MenuLoginProps) => {
  const {data: user, isLoading, error, invalidate} = userContext()

  const [providers, setproviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>()

  useEffect(() => {
    const setTheProviders = async () => {
      const setupProviders = await getProviders()
      setproviders(setupProviders)
    }
    setTheProviders()
  }, [])

  const {txtVariantContent, bgVariant} = useVariants(props.variant??'primary')

  return (
    <>
    {isLoading && <div className='animate-spin'>C</div>}
    {user && 
      <div className="avatar">
        <div className="w-20 mask mask-hexagon uppercase text-base-content">
          {user.image 
            ? <img src={user.image!} />
            : (user.name.substring(0,1))
          }
        </div>
      </div>
    }
    {!isLoading && !user &&
      <div
        onClick={() => signIn(providers?.google.id)}
        className={twMerge(
          `p-1 hover:scale-125 rounded-full transition-all duration-200 ease-in-out`,
          txtVariantContent,
          bgVariant,
          props.className
        )}
      >
        <GoogleSVG />
      </div>
    }
  </>
  )
}

export default GoogleLogin
