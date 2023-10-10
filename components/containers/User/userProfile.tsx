import ImageDrop from 'components/forms/ImageDrop'
import SelectInput from 'components/forms/SelectInput'
import TextInput from 'components/forms/TextInput'
import Typography from 'components/ui/typography/typography'
import {useToast} from 'context/ToastContextProvider'
import useDebug from 'hooks/useDebug'
import useRocketQuery from 'hooks/useRocketQuery'
import {useRouter} from 'next/router'
import {Role,User} from 'prisma/context'
import React,{useEffect,useState} from 'react'
import {CompleteFile} from 'types'
import {sendApi} from 'utils/helpers'

const {debug} = useDebug('components/user/USerProfile')

type Props = {
  slug: string
}

const UserProfile = ({slug, ...props}:Props) => {
  const { data: user, invalidate } = useRocketQuery<User>({
    name: `user-${slug}`,
    url: `user/${slug}`,
  })
  const isAdmin = user?.role === 'ADMIN'
  const isDM = user?.role === 'DM'
  const isPlayer = user?.role === 'PLAYER'

  const router = useRouter()

  const { notify, notifyError } = useToast()

  const [name, setName] = useState(user?.name ?? undefined)
  const [image, setImage] = useState(user?.image ?? undefined)
  const [role, setRole] = useState<Role>(user?.role ?? undefined)
  const [visible, setVisible] = useState(user?.visible ?? false)

  const update = async ({
    e,
    ...props
  }: {
    e?: React.FormEvent<HTMLFormElement>
    image?: string
    name?: string
    role?: string
    visible?: string
  }) => {
    e?.preventDefault()
    const body = {
      id: user.id,
      name: props.name ?? name,
      role: props.role ?? role,
      image: props.image ?? image,
      visible: props.visible ?? visible,
    }
    debug('update', body)
    const result = await sendApi(`user/${user.id}/update`, body)
    if (result) {
      notify('Your profile has been updated')
      if (result.data.slug !== slug) {
        router.push(`/user/${result.data.slug}`)
      }
      invalidate()
    } else {
      notifyError()
    }
  }

  const onDropComplete = (files: CompleteFile[]) => {
    if (!files[0]) {
      notifyError()
      return
    }
    const image = files[0].secure_url
    update({ image })
  }

  useEffect(() => {
    if (!user) return
    setName(() => user.name)
    setRole(() => user.role)
    setImage(() => user.image)
    setVisible(() => user.visible)
  }, [user])
  return (
    <div>
      {user && (
        <Typography>
          <form onSubmit={(e) => update({ e })}>
            <TextInput
              label="Your Name"
              value={name}
              setValue={setName}
              className="text-xl"
            />
            <ImageDrop limit={1} label="Avatar" onDropComplete={onDropComplete}>
              {user.image && (
                <div>
                  <img src={user.image} className="w-32" />
                </div>
              )}
            </ImageDrop>
            {isAdmin && (
              <SelectInput
                label="Role"
                items={[
                  { id: 'PLAYER', name: 'PLAYER' },
                  { id: 'DM', name: 'DM' },
                  { id: 'ADMIN', name: 'ADMIN' },
                ]}
                item={role}
                setItem={(role) => update({ role: role.id })}
                className="my-2"
              />
            )}
            <button type="submit" className="btn-primary btn">
              Save
            </button>
          </form>
        </Typography>
      )}
    </div>
  )
}

export default UserProfile