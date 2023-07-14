import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query'

export enum ErrorStatus {
  BadRequest = 400,
  Unauthorized = 401,
  PreconditionFailed = 412,
  ServerError = 500,
  NotFound = 404,
  Forbidden = 403,
}

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
