import { Builder, Tags } from 'src/store/APIs/types'
import { format } from 'util'

import { HttpMethod } from '..'
import {
  deserializeMyceliumEvents,
  MyceliumEvent,
  MyceliumInspection,
} from './types'

export enum Endpoints {
  GetEvents = '/mycelia/%s/inspections',
  InspectMycelium = '/mycelia/%s/inspections',
  UpdateInspection = '/mycelia/options',
}

export const getEvents = (builder: Builder) =>
  builder.query<MyceliumEvent[], { myceliumId: string }>({
    providesTags: (_, __, { myceliumId: id }) => [{ id, type: Tags.Events }],
    query: ({ myceliumId }) => format(Endpoints.GetEvents, myceliumId),
    transformResponse: deserializeMyceliumEvents,
  })

export const inspectMycelium = (builder: Builder) =>
  builder.mutation<
    MyceliumEvent,
    { myceliumId: string; inspection: MyceliumInspection }
  >({
    invalidatesTags: (_, __, { myceliumId }) => [
      { id: myceliumId, type: Tags.Events },
    ],
    query: ({ inspection, myceliumId }) => ({
      body: inspection,
      method: HttpMethod.Post,
      url: format(Endpoints.InspectMycelium, myceliumId),
    }),
  })
