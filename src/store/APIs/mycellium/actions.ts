import { Builder, Tags } from 'src/store/APIs/types'
import { format } from 'util'

import { HttpMethod } from '..'
import {
  CreateMyceliumResponse,
  deserializeCreatedMyceliaResponse,
  deserializeMyceliaStatistics,
  deserializeMycelium,
  deserializeMyceliumOptions,
  HarvestRequest,
  MyceliaStatistics,
  MyceliumArchived,
  MyceliumArchivedResponse,
  MyceliumMarkAsReady,
  MyceliumMarkedAsReadyResponse,
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
  ArchiveMycelium = '/mycelia/%s/archive',
  MarkAsReady = '/mycelia/%s/ready',
  Statistics = '/mycelia/statistics',
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
      { type: Tags.Statistics },
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
  builder.mutation<CreateMyceliumResponse, HarvestRequest>({
    invalidatesTags: (_, __, { room_id, strain_source_id }) => [
      { id: room_id, type: Tags.Rooms },
      { id: strain_source_id, type: Tags.Events },
      { type: Tags.Statistics },
    ],
    query: mycelium => ({
      body: mycelium,
      method: HttpMethod.Post,
      url: Endpoints.HarvestMycelium,
    }),
    transformResponse: deserializeCreatedMyceliaResponse,
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

export const archiveMycelium = (builder: Builder) =>
  builder.mutation<
    MyceliumArchivedResponse,
    { myceliumId: string; reason: MyceliumArchived }
  >({
    invalidatesTags: (_, __, { myceliumId }) => [
      { id: myceliumId, type: Tags.Events },
      { id: myceliumId, type: Tags.Mycelium },
      { type: Tags.Statistics },
    ],
    query: ({ reason, myceliumId }) => ({
      body: {
        archived: reason.exitType,
        note: reason.note,
      },
      method: HttpMethod.Put,
      url: format(Endpoints.ArchiveMycelium, myceliumId),
    }),
  })

export const markMyceliumAsReady = (builder: Builder) =>
  builder.mutation<
    MyceliumMarkedAsReadyResponse,
    { myceliumId: string; body: MyceliumMarkAsReady }
  >({
    invalidatesTags: (_, __, { myceliumId }) => [
      { id: myceliumId, type: Tags.Mycelium },
      { id: myceliumId, type: Tags.Events },
      { type: Tags.Statistics },
    ],
    query: ({ body, myceliumId }) => ({
      body,
      method: HttpMethod.Put,
      url: format(Endpoints.MarkAsReady, myceliumId),
    }),
  })

export const getStatistics = (builder: Builder) =>
  builder.query<MyceliaStatistics, void>({
    providesTags: () => [{ type: Tags.Statistics }],
    query: () => Endpoints.Statistics,
    transformResponse: deserializeMyceliaStatistics,
  })
