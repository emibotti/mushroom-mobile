import { abbreviatedDateConverter } from 'src/common/helpers'

export enum MyceliumEventType {
  Inspection = 'inspection',
  TransitionToCulture = 'to_culture',
  TransitionToSpawn = 'to_spawn',
  TransitionToBulk = 'to_bulk',
  TransitionToFruit = 'to_fruit',
  RoomChange = 'room_change',
  Unknown = 'unknown',
  ArchivedSold = 'sold',
  ArchivedContaminated = 'contaminated',
  ArchivedConsumed = 'consumed',
  ArchivedOther = 'other',
}

export interface MyceliumEventResponse {
  id: number
  author_name: string | null
  created_at: string
  event_type: string
  mycelium_id: number
  note: string
}

export interface MyceliumEvent {
  id: number
  authorName: string | undefined
  createdAt: string
  eventType: MyceliumEventType
  myceliumId: string
  note: string
}

export interface MyceliumInspection {
  note: string
}

export const deserializeEventType = (
  rawEventType: string,
): MyceliumEventType => {
  switch (rawEventType) {
    case 'inspection':
      return MyceliumEventType.Inspection
    case 'to_culture':
      return MyceliumEventType.TransitionToCulture
    case 'to_spawn':
      return MyceliumEventType.TransitionToSpawn
    case 'to_bulk':
      return MyceliumEventType.TransitionToBulk
    case 'to_fruit':
      return MyceliumEventType.TransitionToFruit
    case 'room_change':
      return MyceliumEventType.RoomChange
    case 'sold':
      return MyceliumEventType.ArchivedSold
    case 'contaminated':
      return MyceliumEventType.ArchivedContaminated
    case 'consumed':
      return MyceliumEventType.ArchivedConsumed
    case 'other':
      return MyceliumEventType.ArchivedOther
    default:
      return MyceliumEventType.Unknown
  }
}

export const deserializeMyceliumEvent = (
  data: MyceliumEventResponse,
): MyceliumEvent => ({
  authorName: data.author_name ?? undefined,
  createdAt: abbreviatedDateConverter(data.created_at),
  eventType: deserializeEventType(data.event_type),
  id: data.id,
  myceliumId: data.mycelium_id.toString(),
  note: data.note,
})

export const deserializeMyceliumEvents = (
  data: MyceliumEventResponse[],
): MyceliumEvent[] => data.map(deserializeMyceliumEvent)
