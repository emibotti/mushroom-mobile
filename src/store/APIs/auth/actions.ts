import { FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query'
import {
  clearPersistedObject,
  KeysPersisted,
  PersistedUser,
  persistObject,
} from 'src/common/persistance'
import { baseApi, HttpMethod } from 'src/store/APIs'

import { PerformActionResponse } from '../types'
import {
  AuthRequest,
  AuthResponse,
  AuthUserRequest,
  Builder,
  Endpoints,
} from './types'

const authenticateUser = (
  response: AuthResponse,
  meta: FetchBaseQueryMeta | undefined,
) => {
  const authorizationHeader = meta?.response?.headers.get('Authorization')

  if (!authorizationHeader) {
    throw new Error('Error getting authorization header')
  }

  persistObject<PersistedUser>(
    {
      hasOrganization: !!response.data.organization_id,
      session: authorizationHeader,
    },
    KeysPersisted.USER,
  )
  return response
}

export const login = (builder: Builder) =>
  builder.mutation<AuthResponse, AuthUserRequest>({
    query: ({ email, password }) => ({
      body: {
        user: { email, password },
      } as AuthRequest,
      method: HttpMethod.Post,
      url: Endpoints.Login,
    }),
    transformResponse: authenticateUser,
  })

export const logout = (builder: Builder) =>
  builder.mutation<PerformActionResponse, void>({
    onQueryStarted(_, api) {
      api.queryFulfilled.finally(() => {
        api.dispatch(baseApi.util.resetApiState())
      })
    },
    query: () => ({
      method: HttpMethod.Delete,
      url: Endpoints.Logout,
    }),
    transformResponse: (data: PerformActionResponse) => {
      clearPersistedObject(KeysPersisted.USER)
      return data
    },
  })

export const register = (builder: Builder) =>
  builder.mutation<AuthResponse, AuthUserRequest>({
    query: ({ email, password }) => ({
      body: {
        user: { email, password },
      } as AuthRequest,
      method: HttpMethod.Post,
      url: Endpoints.Register,
    }),
    transformResponse: authenticateUser,
  })
