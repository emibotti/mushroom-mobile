import { Builder, Tags } from 'src/store/APIs/types'
import { format } from 'util'

import { deserializeMycelium, MyceliumModel } from './types'

export enum Endpoints {
  GetMycelium = '/mycelia/%s',
}

export const getMycelium = (builder: Builder) =>
  builder.query<MyceliumModel, { id: string }>({
    providesTags: (_, __, { id }) => [{ id, type: Tags.Mycelium }],
    query: ({ id }) => format(Endpoints.GetMycelium, id),
    transformResponse: deserializeMycelium,
  })
