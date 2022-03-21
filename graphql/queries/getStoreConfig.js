import gql from 'graphql-tag'

export const GET_STORE_CONFIG = gql`
  query getStoreConfig {
    storeConfig {
      code
      copyright
      category_url_suffix
      sort_by: catalog_default_sort_by
      grid_per_page
      grid_per_page_values
      locale
      logo_alt
      logo_height
      logo_width
      id
      product_url_suffix
      logo_src: header_logo_src
      store_name
      secure_base_url
      secure_base_media_url
    }
    currency {
      code: default_display_currency_code
      symbol: default_display_currency_symbol
    }
  }
`
