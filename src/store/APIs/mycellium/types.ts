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
  Culture = 0,
  Spawn = 1,
  Bulk = 2,
  Fruit = 3,
}

export interface MyceliumResponse {
  id: number
  name: string
  type: StageResponse
  species: string
  inoculation_date: string
  // strain_source_id: number
  strain_source: StrainLink | null
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

export interface MyceliumModel {
  id: number
  name: string
  stage: string
  species: string
  inoculationDate: CustomDate
  // TODO: Return the entity instead or directly the string (strain_source_name)
  // strainSourceId: number
  strainSource?: StrainLink
  // TODO: Convert to "enum" -> -1: Madre, 0: Master, 1: RP 1, 2: RP 2, ....
  generation: string
  externalProvider?: string
  // TODO: Is it a number? Should be a string. Backend will convert this to the substrate name instead of enum
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
    inoculationDate: DateTime.fromISO(data.inoculation_date),
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
  type: 0,
  updated_at: '2023-07-18T12:00:00.000Z',
  weight: 0.5,
}

export const mockedMycelium: MyceliumModel = deserializeMycelium(
  mockedMyceliumBackendResponse,
)
