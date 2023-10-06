import { useQuery, useQueryClient } from 'react-query'
import useDebug from './useDebug'
import {getApi, sendApi} from 'utils/helpers'

const { debug } = useDebug('useRocketQuery')

/**
 * Property type for using RTK query.
 */
export type RocketQueryProps = {
  /**
   * Name of the query. Examnple: `['article-${slug}', { type: 'article' }]`
   */
  name: string | string[] | (string | { type: string })[]
  /**
   * Url of the api to call. Does not require `await`, this is not an async method.
   */
  url: string
  /**
   * @optional
   * Props to be sent to the API. *Use **Typed props** defined in a {@link useApi} method.*
   */
  body?: any
  /**
   *
   * @param timeout Number of milliseconds before refetch.
   *
   * @default 300000  `5 minutes`
   */
  timeout?: number
}

/**
 * Note that `<T>` cannot be safely implied, since this is a call to REST Api. However, as long
 * as this is being returned from a {@link useRocketQuery} method as part of a {@link useApi}
 * method, then the method will pass the Type through to its consumer.
 *
 *
 * The return properties should be renamed contextually,
 *
 * Example: `const { userPosts, ...} = useRocketQuery<UserPosts[]>({props:RocketQueryProps})`
 *
 * **see** {@link RocketQueryProps}
 */
export type RocketQuery<T> = {
  data: T
  isLoading: boolean
  error: any
  invalidate: () => void
  refetch: () => void
}
/**
 * 
 * @param props {@link RocketQueryProps}

 * @returns Generic {@link RocketQuery}`<T>`
 */
export const useRocketQuery = <T>({
  name,
  url,
  body,
  timeout = 300000,
}: RocketQueryProps): RocketQuery<T> => {
  const qc = useQueryClient()
  const queryKey = Array.isArray(name) ? [...name] : [name]
  const method = async () =>
    body !== undefined
      ? ((await sendApi(url, body)).data as T)
      : ((await getApi(url)) as T)
  debug('useRocketQuery', { name, url })

  const query = useQuery<T>(queryKey, method, {
    refetchInterval: timeout,
    onSettled(data, error) {
      if (error || data === undefined) {
        debug(`onSettled(${queryKey}) ERROR`, { error, data })
      }
      if (data) {
        debug(`onSettled(${queryKey})`, data)
        return data as T
      }
      return null
    },
  })

  const invalidate = () => {
    debug(`invalidate`, { queryKey })
    qc.invalidateQueries(queryKey)
  }

  const refetch = () => {
    debug('refetch', { queryKey })
    qc.refetchQueries(queryKey)
  }

  return { ...query, invalidate, refetch } as RocketQuery<T>
}

export default useRocketQuery
