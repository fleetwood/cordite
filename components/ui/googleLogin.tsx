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

type MenuLoginProps = classNameProps & variantProps & {
}

const GoogleLogin = (props: MenuLoginProps) => {
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
    <div
      onClick={() => signIn(providers?.google.id)}
      className={twMerge(
        `p-1 hover:scale-125 rounded-full transition-all duration-200 ease-in-out`,
        txtVariantContent, bgVariant,
        props.className
        )}
      >
      <GoogleSVG />
    </div>
  )
}

export default GoogleLogin
