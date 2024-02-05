import { baseApi } from 'src/store/APIs'

import {
  checkIfWeightIsRequired,
  createMycelium,
  getMycelium,
  getMyceliumOptions,
  harvestMycelium,
} from './actions'

export const myceliaApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    checkIfWeightIsRequired: checkIfWeightIsRequired(builder),
    createMycelium: createMycelium(builder),
    getMycelium: getMycelium(builder),
    getMyceliumOptions: getMyceliumOptions(builder),
    harvestMycelium: harvestMycelium(builder),
  }),
  overrideExisting: true,
})

export const {
  useGetMyceliumQuery,
  useCreateMyceliumMutation,
  useGetMyceliumOptionsQuery,
  useHarvestMyceliumMutation,
  useCheckIfWeightIsRequiredQuery,
} = myceliaApi
