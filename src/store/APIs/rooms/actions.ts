import { Builder, PerformActionResponse, Tags } from 'src/store/APIs/types'
import { format } from 'util'

import { HttpMethod } from '..'
import {
  Endpoints,
  Room,
  RoomCard,
  roomCardsDeserializer,
  roomDeserializer,
  RoomRequest,
} from './types'

export const getRooms = (builder: Builder) =>
  builder.query<RoomCard[], void>({
    providesTags: () => [{ id: 'LIST', type: Tags.Rooms }],
    query: () => Endpoints.GetRooms,
    transformResponse: roomCardsDeserializer,
  })

export const createRoom = (builder: Builder) =>
  builder.mutation<Room, RoomRequest>({
    invalidatesTags: () => [{ id: 'LIST', type: Tags.Rooms }],
    query: room => ({
      body: room,
      method: HttpMethod.Post,
      url: Endpoints.CreateRoom,
    }),
    transformResponse: roomDeserializer,
  })

export const deleteRoom = (builder: Builder) =>
  builder.mutation<PerformActionResponse, { id: string }>({
    // TODO: Is it the appropriate tag?
    invalidatesTags: () => [{ id: 'LIST', type: Tags.Rooms }],
    query: ({ id }) => ({
      method: HttpMethod.Delete,
      url: format(Endpoints.DeleteRoom, id),
    }),
    // TODO: Show alert that was deleted successfully?
    // transformResponse,
  })

export const getRoom = (builder: Builder) =>
  builder.query<Room, { id: string }>({
    providesTags: (_, __, { id }) => [{ id, type: Tags.Rooms }],
    query: ({ id }) => format(Endpoints.GetRoom, id),
    transformResponse: roomDeserializer,
  })
