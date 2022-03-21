import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache
} from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'

import { shrinkGETQuery } from '@/utils/shrinkGETQuery'
import typePolicies from './policies'

// Intercept and shrink URLs from GET queries. Using
// GET makes it possible to use edge caching in Magento
// Cloud, but risks exceeding URL limits with default usage
// of Apollo's http link. `shrinkGETQuery` encodes the URL
// in a more efficient way.
const customFetchToShrinkQuery = (uri, options) => {
  let url = uri
  if (options.method === 'GET') {
    url = shrinkGETQuery(uri)
  }
  return fetch(url, options)
}

// HTTP connection to the API
const httpLink = new HttpLink({
  uri:
    process.env.NODE_ENV === 'development'
      ? `${process.env.VUE_APP_HOST}/graphql`
      : `${process.env.VUE_APP_GRAPHQL_URL}/graphql`,
  credentials: 'same-origin',
  fetch: customFetchToShrinkQuery,
  // Warning: useGETForQueries risks exceeding URL length limits. These limits
  // in practice are typically set at or behind where TLS terminates. For Magento
  // Cloud and Fastly, 8kb is the maximum by default
  // https://docs.fastly.com/en/guides/resource-limits#request-and-response-limits
  useGETForQueries: true
})

// HTTP headers middleware
const middlewareLink = new ApolloLink((operation, forward) => {
  // const context = operation.getContext()
  operation.setContext({
    headers: {
      // Authorization: exsistCookies.access_token
      //   ? `Bearer ${exsistCookies.access_token}`
      //   : null,
      // Store: exsistCookies?.store_code ?? storeCode,
      // 'Content-Currency': exsistCookies?.currency_code ?? currencyCode,
      // ...context?.headers
    }
  })

  return forward(operation)
})

// HTTP errors message
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // Global error
    graphQLErrors.forEach(({ message }, index) => {
      graphQLErrors[index].message = message.replace('GraphQL error: ', '')

      if (process.browser) {
        console.error({
          message: graphQLErrors[index].message
        })
      } else {
        console.error(graphQLErrors[index].message)
      }
    })
  }

  if (networkError) {
    if (process.browser) {
      console.error({
        message: networkError
      })
    } else {
      console.error(`[Network error]: ${networkError}`)
    }
  }
})

// Merge http to middleware
const apolloLink = middlewareLink.concat(httpLink)

const apollo = new ApolloClient({
  link: errorLink.concat(apolloLink),
  cache: new InMemoryCache({
    addTypename: false,
    typePolicies
  }).restore({}),
  connectToDevTools: process.browser,
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-first'
    }
  }
})

export default apollo
