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

export interface RoomResponse {
  id: string
  name: string
  created_at: string
  updated_at: string
  humidity: number
  temperature: number
  co_2: number
  notes?: string
  // mycellia: Mycelium[]
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
  mycellia: Mycelium[]
}

export const roomCardDeserializer = (room: RoomCard): RoomCard => room
export const roomCardsDeserializer = (rooms: RoomCard[]): RoomCard[] =>
  rooms.map(roomCardDeserializer)

// TODO: Move all this to Mycellium types

export enum Stage {
  Culture = 'culture',
  Spawn = 'spawn',
  Bulk = 'bulk',
  Fruit = 'fruit',
}

export interface Mycelium {
  name: string
  id: string
  stage: Stage
  strain: string
}

export const mockedBackendResponse: Mycelium[] = [
  {
    id: '1',
    name: 'Cult-001',
    stage: Stage.Culture,
    strain: 'Pleorotus Ostreatus',
  },
  {
    id: '2',
    name: 'Fruit-001',
    stage: Stage.Fruit,
    strain: 'Pleorotus Ostreatus',
  },
  { id: '3', name: 'Fruit-002', stage: Stage.Fruit, strain: 'Shiitake' },
]

export const roomDeserializer = (data: RoomResponse) => ({
  co2: data.co_2,
  humidity: data.humidity,
  id: data.id,
  mycellia: mockedBackendResponse,
  name: data.name,
  notes: data.notes,
  temperature: data.temperature,
})
