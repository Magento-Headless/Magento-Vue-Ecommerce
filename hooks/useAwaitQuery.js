import { useApolloClient } from '@vue/apollo-composable'

export const useAwaitQuery = (query) => {
  const { resolveClient } = useApolloClient()
  const client = resolveClient()

  return async (options) => {
    const res = await client.query({
      ...options,
      query
    })

    return res
  }
}
