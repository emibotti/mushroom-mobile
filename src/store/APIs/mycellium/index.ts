import { baseApi } from 'src/store/APIs'

import { createMycelium, getMycelium, getMyceliumOptions } from './actions'

export const myceliaApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createMycelium: createMycelium(builder),
    getMycelium: getMycelium(builder),
    getMyceliumOptions: getMyceliumOptions(builder),
  }),
  overrideExisting: true,
})

export const {
  useGetMyceliumQuery,
  useCreateMyceliumMutation,
  useGetMyceliumOptionsQuery,
} = myceliaApi
