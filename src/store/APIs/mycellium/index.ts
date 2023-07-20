import { baseApi } from 'src/store/APIs'

import { getMycelium } from './actions'

export const myceliaApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMycelium: getMycelium(builder),
  }),
})

export const { useGetMyceliumQuery } = myceliaApi
