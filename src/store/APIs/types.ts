import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { Endpoints as AuthEndpoints } from 'src/store/APIs/auth/types'
import { Endpoints as EventsEndpoints } from 'src/store/APIs/events/actions'
import { Endpoints as MyceliaEndpoints } from 'src/store/APIs/mycellium/actions'
import { Endpoints as OrganizationsEndpoints } from 'src/store/APIs/organization/types'
import { Endpoints as RoomsEndpoints } from 'src/store/APIs/rooms/types'

export type Endpoints =
  | OrganizationsEndpoints
  | AuthEndpoints
  | EventsEndpoints
  | MyceliaEndpoints
  | RoomsEndpoints

export enum ErrorStatus {
  BadRequest = 400,
  Unauthorized = 401,
  PreconditionFailed = 412,
  ServerError = 500,
  NotFound = 404,
  Forbidden = 403,
  UnprocessableEntity = 422,
}

export enum Tags {
  Rooms = 'Rooms',
  Mycelium = 'Mycelium',
  MyceliumOptions = 'MyceliumOptions',
  Events = 'Events',
}

export type Builder = EndpointBuilder<BaseQueryFnType, Tags, ReducerPath>

export enum ReducerPath {
  root = 'baseApi',
}

export type BaseQueryFnType = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
>

export interface PerformActionResponse {
  message?: string
}
