export const whereSlugOrId = (props: { id?: string; slug?: string }) => {
  const { id, slug } = props
  const params = slug
    ? { slug: slug.toLowerCase() }
    : id
    ? { id: id }
    : undefined
  return params
}
export const whereNameOrId = (props: { id?: string; name?: string }) => {
  const { id, name } = props
  const params = 
    name ? { name: name } :
    id ? { id: id } : 
    undefined
  return params
}

export * from './character'
export * from './charAbility'
export * from './charClass'
export * from './charSkill'
export * from './charStat'
export * from './skill'
export * from './stat'
export * from './user'
