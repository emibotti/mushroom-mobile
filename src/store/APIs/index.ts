import { API_HOST } from '@env'
import {
  BaseQueryApi,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { selectHeaders } from 'src/store/storage/headers'

import { ReduxState } from '../rootReducer'
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
    getState,
  }: Pick<BaseQueryApi, 'getState' | 'extra' | 'endpoint' | 'type' | 'forced'>,
) => {
  if (endpoint !== loginEndpointName) {
    const selectedHeaders = selectHeaders(getState() as ReduxState)
    if (selectedHeaders && selectedHeaders.session) {
      // TODO: I think there's no need to use the state, we use the persisted session in the keychain
      // TODO: Change to Authorization header (add Bearer?)
      headers.set('Authorization', selectedHeaders.session)
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
