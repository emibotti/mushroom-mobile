import { baseApi } from 'src/store/APIs'

import { createMycelium, getMycelium } from './actions'

export const myceliaApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createMycelium: createMycelium(builder),
    getMycelium: getMycelium(builder),
  }),
})

export const { useGetMyceliumQuery, useCreateMyceliumMutation } = myceliaApi
