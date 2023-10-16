export const whereSlugOrId = <T>(props: { id?: string; slug?: string }) => {
  const { id, slug } = props
  const params = slug
    ? { slug: slug.toLowerCase() }
    : id
    ? { id: id }
    : undefined
  return params as T
}
export const whereNameOrId = <T>(props: { id?: string; name?: string }) => {
  const params = 
    props.name ? { name: {
      equals: props.name,
      mode: 'insensitive'
    } } :
    props.id ? { id: props.id } : 
    undefined
  return params as T
}

export * from './character'
export * from './charAbility'
export * from './charClass'
export * from './charSkill'
export * from './charStat'
export * from './skill'
export * from './stat'
export * from './user'
