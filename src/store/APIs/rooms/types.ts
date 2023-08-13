import {
  myceliaCardDeserializer,
  MyceliumCard,
  MyceliumCardResponse,
} from '../mycellium/types'

export enum Endpoints {
  GetRooms = '/rooms',
  CreateRoom = '/rooms',
  DeleteRoom = '/rooms/%s',
  GetRoom = '/rooms/%s',
}

export interface RoomCard {
  id: string
  name: string
}

export interface RoomCardResponse {
  id: string
  name: string
}

export interface RoomResponse {
  id: string
  name: string
  created_at: string
  updated_at: string
  room_current_measure: {
    humidity: number
    temperature: number
    co_2: number
  }
  notes?: string
  mycelia: MyceliumCardResponse[]
}

export interface RoomRequest {
  name: string
  humidity: string
  co_2: string
  temperature: string
  notes: string
}

export interface Room {
  id: string
  name: string
  humidity: number
  temperature: number
  co2: number
  notes?: string
  mycelia: MyceliumCard[]
}

export const roomCardDeserializer = (data: RoomCardResponse): RoomCard => ({
  id: data.id,
  name: data.name,
})
export const roomCardsDeserializer = (rooms: RoomCard[]): RoomCard[] =>
  rooms.map(roomCardDeserializer)

export const roomDeserializer = (data: RoomResponse): Room => ({
  co2: data.room_current_measure.co_2,
  humidity: data.room_current_measure.humidity,
  id: data.id,
  mycelia: myceliaCardDeserializer(data.mycelia),
  name: data.name,
  notes: data.notes,
  temperature: data.room_current_measure.temperature,
})
