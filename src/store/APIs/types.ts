import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query'

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
