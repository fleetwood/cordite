import TextInput from 'components/forms/TextInput'
import PageLayout from 'components/ui/layouts/Page'
import Section from 'components/ui/section'
import Typography from 'components/ui/typography/typography'
import {useToast} from 'context/ToastContextProvider'
import {userContext} from 'context/UserContext'
import React,{useEffect,useState} from 'react'
import {sendApi} from 'utils/helpers'

const Page = () => {
  const {user, isAdmin} = userContext()
  const {notify, notifyError} = useToast()

  const [name, setName] = useState(user?.name ?? '')
  const [image, setImage] = useState(user?.image ?? '')
  const [role, setRole] = useState(user?.role ?? '')
  const [visible, setVisible] = useState(user?.visible ?? false)

  const update = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await sendApi(`user/${user.id}/update`,{
      id: user.id,
      name,
      role,
      image, 
      visible
    })
    if (result) {
      notify('Your profile has been updated')
    } else {
      notifyError()
    }
  }

  useEffect(() => {
    if (!user) return
    setName(() => user.name)
    setRole(() => user.role)
    setImage(() => user.image)
    setVisible(() => user.visible)
  },[user])

  return (
    <PageLayout title="Profile">
      <Section>
        {user && (
          <Typography>
            <form onSubmit={(e) => update(e)}>
              <TextInput
                label="Your Name"
                value={name}
                setValue={setName}
                className="text-xl"
              />
              <TextInput
                label="Avatar"
                value={image}
                setValue={setImage}
                className="text-xl"
              />
              {isAdmin && (
                <TextInput
                  label="Your Role"
                  value={role}
                  setValue={setRole}
                  className="text-xl"
                />
              )}
              <button
                type="submit"
                className="btn-primary btn"
              >
                Save
              </button>
            </form>
          </Typography>
        )}
      </Section>
    </PageLayout>
  )
}

export default Page