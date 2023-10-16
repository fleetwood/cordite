import {CharacterStub,CharacterStubInclude,Prisma,User} from "prisma/context"

export type UserStub = User & {
  characters: CharacterStub[]
}

export const UserStubInclude:Prisma.UserInclude = {
  characters: {include: CharacterStubInclude}
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
