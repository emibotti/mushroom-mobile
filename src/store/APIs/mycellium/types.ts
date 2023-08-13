import { DateTime } from 'luxon'
import { generalStrings } from 'src/common/generalStrings'

type CustomDate = DateTime

interface StrainLink {
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
  strain_source: StrainLink | null
  generation: GenerationResponse | number
  external_provider: string | null
  substrate: string
  container: string
  strain_description: string
  shelf_time: number
  image_url: string
  weight: number
  prefix: string
  created_at?: string
  updated_at?: string
}

export interface MyceliumModel {
  id: number
  name: string
  stage: string
  species: string
  inoculationDate: CustomDate | undefined
  strainSource?: StrainLink
  generation: string
  externalProvider?: string
  substrate: string
  container: string
  strainDescription: string
  shelfTime: number
  imageUrl: string
  weight: number
  prefix: string
  createdAt?: CustomDate
  updatedAt?: CustomDate
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
      return generalStrings.stageCulture // cultura
    case StageResponse.Spawn:
      return generalStrings.stageSpawn // semilla
    case StageResponse.Bulk:
      return generalStrings.stageBulk // bloque voluminoso
    case StageResponse.Fruit:
      return generalStrings.stageFruit // fructificación
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
    container: data.container,
    createdAt: data.created_at ? DateTime.fromISO(data.created_at) : undefined,
    externalProvider: data.external_provider ?? undefined,
    generation: buildGeneration(data.generation),
    id: data.id,
    imageUrl: data.image_url,
    inoculationDate: data.inoculation_date
      ? DateTime.fromISO(data.inoculation_date)
      : undefined,
    name: data.name,
    prefix: data.prefix,
    shelfTime: data.shelf_time,
    species: data.species,
    // TODO: Check if it comes a string instead of a number
    stage: data.type ? stage[data.type] : 'Unknown',
    strainDescription: data.strain_description,
    strainSource: data.strain_source ?? undefined,
    substrate: data.substrate,
    updatedAt: data.updated_at ? DateTime.fromISO(data.updated_at) : undefined,
    weight: data.weight,
  }
}

export const mockedMyceliumBackendResponse: MyceliumResponse = {
  container: 'Cardboard',
  created_at: '2023-07-18T10:00:00.000Z',
  external_provider: 'Provider XYZ',
  generation: 3,
  id: 1,
  image_url: 'https://example.com/image.jpg',
  inoculation_date: '2023-07-18T08:00:00.000Z',
  name: 'Mycelium 1',
  prefix: 'ABC',
  shelf_time: 5,
  species: 'Example Species',
  strain_description: `La gírgola, seta de ostra, champiñón ostra o pleuroto ostra es una especie de hongo basidiomiceto del orden Agaricales, comestible.​

Este hongo crece en ambientes con temperaturas de 23 a 32°C con una óptima de 28°C para crecimiento micelial y de 18 a 20°C para formación de primordios, pH de 4.5 a 7 con un óptimo de 5.5, humedad de sustrato entre 60 y 70%, y una humedad relativa de 80 a 90% `,
  strain_source: null,
  substrate: 'Agar agar',
  type: StageResponse.Culture,
  updated_at: '2023-07-18T12:00:00.000Z',
  weight: 0.5,
}

export const mockedMycelium: MyceliumModel = deserializeMycelium(
  mockedMyceliumBackendResponse,
)

export interface MyceliumRequest {
  id: number
  name: string
  type: StageResponse
  species: string
  inoculation_date: string
  strain_source_id: string | null
  // TODO: Rename to `generation_number`?
  generation: GenerationResponse | number
  external_provider: string | null
  // TODO: Does it come directly from the backend?
  substrate: string
  container: string
  strain_description: string
  shelf_time: number
  image_url: string
  weight: number
  prefix: string
  created_at?: string
  updated_at?: string
}

export const mockedMyceliumBackendRequest: MyceliumRequest = {
  container: 'Cardboard',
  created_at: '2023-07-18T10:00:00.000Z',
  external_provider: 'Provider XYZ',
  generation: 3,
  id: 1,
  image_url: 'https://example.com/image.jpg',
  inoculation_date: '2023-07-18T08:00:00.000Z',
  name: 'Mycelium 1',
  prefix: 'ABC',
  shelf_time: 5,
  species: 'Example Species',
  strain_description: `La gírgola, seta de ostra, champiñón ostra o pleuroto ostra es una especie de hongo basidiomiceto del orden Agaricales, comestible.​

Este hongo crece en ambientes con temperaturas de 23 a 32°C con una óptima de 28°C para crecimiento micelial y de 18 a 20°C para formación de primordios, pH de 4.5 a 7 con un óptimo de 5.5, humedad de sustrato entre 60 y 70%, y una humedad relativa de 80 a 90% `,
  strain_source_id: null,
  substrate: 'Agar agar',
  type: StageResponse.Culture,
  updated_at: '2023-07-18T12:00:00.000Z',
  weight: 0.5,
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
