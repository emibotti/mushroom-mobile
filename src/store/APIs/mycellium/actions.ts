import { Builder, Tags } from 'src/store/APIs/types'
import { format } from 'util'

import { HttpMethod } from '..'
import { deserializeMycelium, MyceliumModel, MyceliumResponse } from './types'

export enum Endpoints {
  GetMycelium = '/mycelia/%s',
  CreateMycelium = '/mycelia',
}

export const getMycelium = (builder: Builder) =>
  builder.query<MyceliumModel, { id: string }>({
    providesTags: (_, __, { id }) => [{ id, type: Tags.Mycelium }],
    query: ({ id }) => format(Endpoints.GetMycelium, id),
    transformResponse: deserializeMycelium,
  })

export const createMycelium = (builder: Builder) =>
  // TODO: Add what needs to be sent intiially (optional and mandatory)
  // also check return
  builder.mutation<MyceliumModel, Partial<MyceliumResponse>>({
    // TODO: What should we invalidate?
    invalidatesTags: () => [{ id: 'LIST', type: Tags.Mycelium }],
    query: mycelium => ({
      body: mycelium,
      method: HttpMethod.Post,
      url: Endpoints.CreateMycelium,
    }),
    transformResponse: deserializeMycelium,
  })
