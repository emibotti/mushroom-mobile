import { Builder, Tags } from 'src/store/APIs/types'
import { format } from 'util'

import { HttpMethod } from '..'
import {
  CreateMyceliumResponse,
  deserializeMycelium,
  deserializeMyceliumOptions,
  MyceliumModel,
  MyceliumOptions,
  MyceliumRequest,
} from './types'

export enum Endpoints {
  GetMycelium = '/mycelia/%s',
  CreateMycelium = '/mycelia',
  GetMyceliumOptions = '/mycelia/options',
}

export const getMycelium = (builder: Builder) =>
  builder.query<MyceliumModel, { id: string }>({
    providesTags: (_, __, { id }) => [{ id, type: Tags.Mycelium }],
    query: ({ id }) => format(Endpoints.GetMycelium, id),
    transformResponse: deserializeMycelium,
  })

export const createMycelium = (builder: Builder) =>
  builder.mutation<CreateMyceliumResponse, MyceliumRequest>({
    invalidatesTags: (_, __, { room_id }) => [
      { id: room_id, type: Tags.Rooms },
    ],
    query: mycelium => ({
      body: mycelium,
      method: HttpMethod.Post,
      url: Endpoints.CreateMycelium,
    }),
    // TODO: Check this transformer
    transformResponse: (response: CreateMyceliumResponse) => ({
      message: response.message,
      mycelia: response.mycelia,
    }),
  })

export const getMyceliumOptions = (builder: Builder) =>
  builder.query<MyceliumOptions, void>({
    providesTags: () => [{ type: Tags.MyceliumOptions }],
    query: () => Endpoints.GetMyceliumOptions,
    transformResponse: deserializeMyceliumOptions,
  })
