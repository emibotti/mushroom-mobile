import { baseApi } from 'src/store/APIs'

import { getEvents, inspectMycelium } from './actions'

export const eventsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getEvents: getEvents(builder),
    inspectMycelium: inspectMycelium(builder),
  }),
  overrideExisting: true,
})

export const { useGetEventsQuery, useInspectMyceliumMutation } = eventsApi
