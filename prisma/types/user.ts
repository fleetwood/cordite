import {Character, CharacterStub, CharacterStubInclude, User} from "prisma/context"

export type UserStub = User & {
  characters: CharacterStub[]
}

export const UserStubInclude = {
  include: {
    characters: {
      include: {
        owner: true,
        charClass: true,
        stats: true,
        skills: true,
        abilities: true
      },
    },
  },
}

export type UserDetailProps = {
  id?: string
  name?: string
  email?: string
  slug?: string
}

export const getUserWhere = (props: UserDetailProps) => {
  const { id, name, email, slug } = props
  const user = name
    ? { name: name }
    : email
    ? { email: email }
    : slug
    ? { slug: slug.toLowerCase() }
    : id
    ? { id: id }
    : undefined
  return user
}
