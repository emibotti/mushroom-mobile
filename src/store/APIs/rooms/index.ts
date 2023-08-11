import { baseApi } from 'src/store/APIs'

import { createRoom, deleteRoom, getRoom, getRooms } from './actions'

export const roomsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createRoom: createRoom(builder),
    deleteRoom: deleteRoom(builder),
    getRoom: getRoom(builder),
    getRooms: getRooms(builder),
  }),
})

export const { useGetRoomsQuery, useCreateRoomMutation, useGetRoomQuery } =
  roomsApi
