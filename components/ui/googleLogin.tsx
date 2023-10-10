import {userContext} from 'context/UserContext'
import {BuiltInProviderType} from 'next-auth/providers'
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
  signOut
} from 'next-auth/react'
import {useEffect,useState} from 'react'
import useVariants from 'src/hooks/useVariants'
import {twMerge} from 'tailwind-merge'
import {classNameProps,variantProps} from 'types'
import {GoogleIcon} from './icons'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Spinner from './spinner'

type MenuLoginProps = classNameProps & variantProps & {
  mobile?: boolean
}

const GoogleLogin = (props: MenuLoginProps) => {
  const { user, isLoading, error, invalidate, isAdmin, isDM} = userContext()
  const router = useRouter()

  const go = (href:string) => router.push(href)

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

  const {textVariantContent: txtVariantContent, bgVariant, borderVariant} = useVariants(props.variant??'primary')

  return (
    <>
      {isLoading && <Spinner />}
      {user &&
      <label tabIndex={0} className="m-1">
        <div className="avatar">
          <div className="w-20 mask mask-hexagon uppercase text-base-content">
            {user.image ? <img loading='lazy' src={user.image!} /> : user.name.substring(0, 1)}
          </div>
        </div>
      </label>
      }
      {user && (
        <ul tabIndex={0} className='min-w-full text-right'>
          <li className='py-2 pr-2 transition-colors duration-200 rounded-md cursor-pointer hover:bg-neutral hover:text-primary' onClick={() => go('/user')}>Profile</li>
          <li className='py-2 pr-2 transition-colors duration-200 rounded-md cursor-pointer hover:bg-neutral hover:text-primary' onClick={() => go("/user/characters")}>Characters</li>
          {(isAdmin || isDM) &&
            <li className='py-2 pr-2 transition-colors duration-200 rounded-md cursor-pointer hover:bg-neutral hover:text-primary' onClick={() => go("/players")}>Players</li>
          }
          <li className='py-2 pr-2 transition-colors duration-200 rounded-md cursor-pointer hover:bg-neutral hover:text-warning' onClick={() => signOut()}>Sign Out</li>
        </ul>
      )}
      {!isLoading && !user && (
        <div
          onClick={() => signIn(providers?.google.id)}
          className={twMerge(
            `cursor-pointer rounded-full h-8 w-8`,
            'hover:scale-125 transition-all duration-200 ease-out',
            txtVariantContent,
            bgVariant,
            props.className
          )}
        >
          <GoogleIcon />
        </div>
      )}
    </>
  )
}

export default GoogleLogin
