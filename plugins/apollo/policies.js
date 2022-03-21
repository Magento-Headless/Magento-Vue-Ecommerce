/**
 * Custom type policies that allow us to have more granular control
 * over how ApolloClient reads from and writes to the cache.
 *
 * https://www.apollographql.com/docs/react/caching/cache-configuration/#typepolicy-fields
 * https://www.apollographql.com/docs/react/caching/cache-field-behavior/
 */
const typePolicies = {
  // Query/Mutation are "types" just like "Cart".
  Query: {
    fields: {
      cart: {
        // Replaces @connection(key: "Cart")
        keyArgs: () => 'Cart'
      },
      customerCart: {
        keyArgs: () => 'Cart'
      },
      products: {
        merge(existing, incoming, { mergeObjects }) {
          // Correct, thanks to invoking nested merge functions.
          return mergeObjects(existing, incoming)
        }
      },
      company: {
        merge(existing, incoming, { mergeObjects }) {
          return mergeObjects(existing, incoming)
        }
      },
      customer: {
        merge(existing, incoming, { mergeObjects }) {
          return mergeObjects(existing, incoming)
        }
      },
      storeConfig: {
        merge(existing, incoming, { mergeObjects }) {
          return mergeObjects(existing, incoming)
        }
      }
    }
  },
  CategoryTree: {
    fields: {
      children: {
        merge(existing, incoming) {
          return incoming
        }
      }
    }
  }
}

export default typePolicies
