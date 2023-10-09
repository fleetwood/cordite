import TextInput from 'components/forms/TextInput'
import PageLayout from 'components/ui/layouts/Page'
import Section from 'components/ui/section'
import Typography from 'components/ui/typography/typography'
import {userContext} from 'context/UserContext'
import React, {useState} from 'react'

const Page = () => {
  const {user, isAdmin} = userContext()

  const [username, setUsername] = useState(user.name)
  const [image, setImage] = useState(user.image)
  const [userRole, setUserRole] = useState(user.role)

  const update = () => {

  }

  return (
    <PageLayout title='Profile'>
      <Section>
        {user && 
        <Typography>
          <TextInput label='Your Name' value={username} setValue={setUsername} onChange={(e) => update()} className='text-xl' />
          <TextInput label='Avatar' value={image} setValue={setImage} onChange={(e) => update()} className='text-xl' />
          {isAdmin &&
            <TextInput label='Your Role' value={userRole} setValue={setUserRole} onChange={(e) => update()} className='text-xl' />
          }
        </Typography>
        }
      </Section>
    </PageLayout>
  )
}

export default Page