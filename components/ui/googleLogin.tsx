import {BuiltInProviderType} from 'next-auth/providers'
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from 'next-auth/react'
import {useEffect,useState} from 'react'
import useVariants from 'src/hooks/useVariants'
import {twMerge} from 'tailwind-merge'
import {classNameProps,variantProps} from 'types'
import {GoogleSVG} from './icons'
import {useAmp} from 'next/amp'
import useAuth from 'hooks/useAuth'
import {capFirstLetter} from 'utils/helpers'

type MenuLoginProps = classNameProps & variantProps & {
}

const GoogleLogin = (props: MenuLoginProps) => {
  const {me, isLoading, error, invalidate} = useAuth()

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
    {me && 
      <div className="avatar">
        <div className="w-24 mask mask-triangle uppercase text-base-content">
          {me.image 
            ? <img src={me.image!} />
            : (me.name.substring(0,1))
          }
        </div>
      </div>
    }
    {!isLoading && !me &&
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
