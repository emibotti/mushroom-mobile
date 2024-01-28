import { baseApi } from 'src/store/APIs'

import {
  archiveMycelium,
  checkIfWeightIsRequired,
  createMycelium,
  getMycelium,
  getMyceliumOptions,
  getStatistics,
  harvestMycelium,
  markMyceliumAsReady,
} from './actions'

export const myceliaApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    archiveMycelium: archiveMycelium(builder),
    checkIfWeightIsRequired: checkIfWeightIsRequired(builder),
    createMycelium: createMycelium(builder),
    getMycelium: getMycelium(builder),
    getMyceliumOptions: getMyceliumOptions(builder),
    getStatistics: getStatistics(builder),
    harvestMycelium: harvestMycelium(builder),
    markMyceliumAsReady: markMyceliumAsReady(builder),
  }),
  overrideExisting: true,
})

export const {
  useGetMyceliumQuery,
  useCreateMyceliumMutation,
  useGetMyceliumOptionsQuery,
  useHarvestMyceliumMutation,
  useCheckIfWeightIsRequiredQuery,
  useArchiveMyceliumMutation,
  useMarkMyceliumAsReadyMutation,
  useGetStatisticsQuery,
} = myceliaApi
