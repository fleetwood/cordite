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

type MenuLoginProps = classNameProps & variantProps & {
}

const GoogleLogin = (props: MenuLoginProps) => {
  const { user, isLoading, error, invalidate} = userContext()

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
      {isLoading && <div className="animate-spin">C</div>}
      {user && (
        <div className="dropdown dropdown-right">
          <label tabIndex={0} className="m-1 cursor-pointer">
            <div className="avatar">
              <div className="w-20 mask mask-hexagon uppercase text-base-content">
                {user.image ? (
                  <img src={user.image!} />
                ) : (
                  user.name.substring(0, 1)
                )}
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href='/user'>Profile</Link>
            </li>
            <li>
              <Link href='/user/characters'>Characters</Link>
            </li>
            <li>
              <div className='cursor-pointer hover:text-warning' onClick={() => signOut()}>Sign Out</div>
            </li>
          </ul>
        </div>
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
