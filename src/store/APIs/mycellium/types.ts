import { generalStrings } from 'src/common/generalStrings'
import { optionalDateConverter } from 'src/common/helpers'

export interface EntityLink {
  id: string
  name: string
}

// TODO: Move to general strings
export enum GenerationResponse {
  Mother = -1,
  Master = 0,
}

export enum StageResponse {
  Culture = 'Culture',
  Spawn = 'Spawn',
  Bulk = 'Bulk',
  Fruit = 'Fruit',
}

export interface MyceliumCardResponse {
  id: string
  image_url: string | null
  name: string
  species: string
  type: StageResponse
}

export interface MyceliumCard {
  id: string
  image_url: string | undefined
  name: string
  species: string
  type: string
}

export const myceliumCardDeserializer = (
  data: MyceliumCardResponse,
): MyceliumCard => ({
  id: data.id,
  image_url: data.image_url ?? undefined,
  name: data.name,
  species: data.species,
  type: buildStage(data.type),
})

export const myceliaCardDeserializer = (
  data: MyceliumCardResponse[],
): MyceliumCard[] => data.map(myceliumCardDeserializer)

export interface MyceliumResponse {
  id: number
  name: string
  type: StageResponse
  species: string
  inoculation_date: string | null
  strain_source: EntityLink | null
  generation: GenerationResponse | number
  external_provider: string | null
  substrate: string
  container: string
  strain_description: string
  shelf_time: number
  image_url: string
  weight: number
  created_at: string | null
  updated_at: string | null
  room: EntityLink | null
  flush: number | null
  ready: boolean
  archived: string | null
}

export interface MyceliumModel {
  id: number
  name: string
  stage: string
  species: string
  // TODO: to string
  inoculationDate: string | undefined
  strainSource?: EntityLink
  generation: string
  externalProvider?: string
  substrate: string
  container: string
  strainDescription: string
  shelfTime: number
  imageUrl: string
  weight: number
  createdAt?: string
  updatedAt?: string
  room?: EntityLink
  flush?: number
  archived?: ExitTypes
  ready: boolean
}

export interface CreateMyceliumResponse {
  mycelia: EntityLink[]
  message: string
}

export const buildGeneration = (generationNumber: number): string => {
  switch (generationNumber) {
    case GenerationResponse.Mother:
      return generalStrings.generationMother
    case GenerationResponse.Master:
      return generalStrings.generationMaster
    default:
      return `${generalStrings.generationRP} ${generationNumber}`
  }
}

export const buildStage = (stageResponse: StageResponse) => {
  switch (stageResponse) {
    case StageResponse.Culture:
      return generalStrings.stageCulture
    case StageResponse.Spawn:
      return generalStrings.stageSpawn
    case StageResponse.Bulk:
      return generalStrings.stageBulk
    case StageResponse.Fruit:
      return generalStrings.stageFruit
  }
}

export const buildArchived = (archived: string): ExitTypes => {
  switch (archived) {
    case ExitTypes.Sold:
      return ExitTypes.Sold
    case ExitTypes.Contaminated:
      return ExitTypes.Contaminated
    case ExitTypes.Consumed:
      return ExitTypes.Consumed
    case ExitTypes.Other:
      return ExitTypes.Other
    default:
      return ExitTypes.Other
  }
}

export const stage = {
  [StageResponse.Culture]: generalStrings.stageCulture,
  [StageResponse.Spawn]: generalStrings.stageSpawn,
  [StageResponse.Bulk]: generalStrings.stageBulk,
  [StageResponse.Fruit]: generalStrings.stageFruit,
}

export const deserializeMycelium = (data: MyceliumResponse): MyceliumModel => {
  return {
    archived: data.archived ? buildArchived(data.archived) : undefined,
    container: data.container,
    createdAt: optionalDateConverter(data.created_at),
    externalProvider: data.external_provider ?? undefined,
    flush: data.flush ?? undefined,
    generation: buildGeneration(data.generation),
    id: data.id,
    imageUrl: data.image_url,
    inoculationDate: optionalDateConverter(data.inoculation_date),

    name: data.name,

    ready: data.ready,

    // TODO: Create an Entity deserializer for `room` and `strainSource`?
    room: data.room ?? undefined,

    shelfTime: data.shelf_time,

    species: data.species,
    // TODO: Check if it comes a string instead of a number
    stage: data.type ? stage[data.type] : 'Unknown',
    strainDescription: data.strain_description,
    strainSource: data.strain_source ?? undefined,
    substrate: data.substrate,
    updatedAt: optionalDateConverter(data.updated_at),
    weight: data.weight,
  }
}

export interface MyceliumRequest {
  type: StageResponse
  species: string | null
  // TODO: We need to validate with the users if this will be valuable to have in the creation too
  // inoculation_date: string
  strain_source_id: string | null
  generation: GenerationResponse | number | null
  external_provider: string | null
  substrate: string
  container: string
  strain_description: string | null
  shelf_time: number | null
  image_url: string | null
  weight: number | null
  prefix: string
  quantity: number
  room_id: string
  note: string | null
}

export interface HarvestRequest {
  strain_source_id: string
  weight: number | null
  room_id: string
  note: string | null
}

export interface HarvestResponse {
  fruit: EntityLink
}

export interface MyceliumOptionItemResponse {
  translated_label: string
  value: string
}

export interface MyceliumOptionItem {
  label: string
  value: string
}

export interface MyceliumOptionsResponse {
  species: MyceliumOptionItemResponse[]
  substrates: MyceliumOptionItemResponse[]
  containers: MyceliumOptionItemResponse[]
}

export interface MyceliumOptions {
  speciesOptions: MyceliumOptionItem[]
  substrateOptions: MyceliumOptionItem[]
  containerOptions: MyceliumOptionItem[]
}

export const deserializeMyceliumOptionItem = (
  data: MyceliumOptionItemResponse,
): MyceliumOptionItem => ({ label: data.translated_label, value: data.value })

export const deserializeMyceliumOptionItems = (
  data: MyceliumOptionItemResponse[],
): MyceliumOptionItem[] => data.map(deserializeMyceliumOptionItem)

export const deserializeMyceliumOptions = (
  data: MyceliumOptionsResponse,
): MyceliumOptions => ({
  containerOptions: deserializeMyceliumOptionItems(data.containers),
  speciesOptions: deserializeMyceliumOptionItems(data.species),
  substrateOptions: deserializeMyceliumOptionItems(data.substrates),
})

export const deserializeCreatedMyceliaResponse = (
  data: CreateMyceliumResponse,
): CreateMyceliumResponse => data

export enum ExitTypes {
  Sold = 'sold',
  Contaminated = 'contaminated',
  Consumed = 'consumed',
  Other = 'other',
}

export interface MyceliumArchived {
  exitType: ExitTypes
  note?: string
}

export interface MyceliumArchivedResponse {
  mycelium: EntityLink
  message: string
}

export interface MyceliumMarkAsReady {
  ready: boolean
  note?: string
}

export interface MyceliumMarkedAsReadyResponse {
  ready: boolean
}
