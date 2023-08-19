import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { Endpoints as AuthEndpoints } from 'src/store/APIs/auth/types'
import { Endpoints as OrganizationsEndpoints } from 'src/store/APIs/organization/types'

export type Endpoints = OrganizationsEndpoints | AuthEndpoints

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
