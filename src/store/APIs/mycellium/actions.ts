import { Builder, Tags } from 'src/store/APIs/types'
import { format } from 'util'

import { HttpMethod } from '..'
import {
  CreateMyceliumResponse,
  deserializeCreatedMyceliaResponse,
  deserializeMycelium,
  deserializeMyceliumOptions,
  HarvestRequest,
  HarvestResponse,
  MyceliumModel,
  MyceliumOptions,
  MyceliumRequest,
} from './types'

export enum Endpoints {
  GetMycelium = '/mycelia/%s',
  CreateMycelium = '/mycelia',
  HarvestMycelium = '/mycelia/harvest',
  GetMyceliumOptions = '/mycelia/options',
  CheckWeightIsRequired = '/mycelia/%s/weight_required',
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
    transformResponse: deserializeCreatedMyceliaResponse,
  })

export const getMyceliumOptions = (builder: Builder) =>
  builder.query<MyceliumOptions, void>({
    providesTags: () => [{ type: Tags.MyceliumOptions }],
    query: () => Endpoints.GetMyceliumOptions,
    transformResponse: deserializeMyceliumOptions,
  })

export const harvestMycelium = (builder: Builder) =>
  builder.mutation<HarvestResponse, HarvestRequest>({
    invalidatesTags: (_, __, { room_id, strain_source_id }) => [
      { id: room_id, type: Tags.Rooms },
      { id: strain_source_id, type: Tags.Mycelium },
    ],
    query: mycelium => ({
      body: mycelium,
      method: HttpMethod.Post,
      url: Endpoints.HarvestMycelium,
    }),
  })

export const checkIfWeightIsRequired = (builder: Builder) =>
  builder.query<
    { result: boolean; message: string },
    { strain_source_id: string }
  >({
    providesTags: (_, __, { strain_source_id }) => [
      { id: strain_source_id, type: Tags.Mycelium },
    ],
    query: ({ strain_source_id }) =>
      format(Endpoints.CheckWeightIsRequired, strain_source_id),
  })
