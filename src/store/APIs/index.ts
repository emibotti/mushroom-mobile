import { API_HOST } from '@env'
import {
  BaseQueryApi,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { getPersistedObject, KeysPersisted } from 'src/common/persistance'

import { loginEndpointName } from './auth'
import { ReducerPath } from './types'

export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Patch = 'PATCH',
  Put = 'PUT',
  Delete = 'DELETE',
}

export const prepareHeaders = (
  headers: Headers,
  {
    endpoint,
  }: Pick<BaseQueryApi, 'getState' | 'extra' | 'endpoint' | 'type' | 'forced'>,
) => {
  if (endpoint !== loginEndpointName) {
    const session = getPersistedObject(KeysPersisted.SESSION_KEY)
    if (session) {
      headers.set('Authorization', session)
    }
  }

  return headers
}

export const baseQuery = fetchBaseQuery({
  baseUrl: API_HOST,
  prepareHeaders,
})

export const baseApi = createApi({
  baseQuery,
  endpoints: () => ({}),
  reducerPath: ReducerPath.root,
  tagTypes: [],
})
