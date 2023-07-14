import { FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query'
import {
  clearPersistedObject,
  KeysPersisted,
  PersistedUser,
  persistObject,
} from 'src/common/persistance'
import { baseApi, HttpMethod } from 'src/store/APIs'

import { PerformActionResponse } from '../types'
import { Builder, Endpoints } from './types'

interface AuthUserRequest {
  email: string
  password: string
}

interface AuthUserResponse {
  email: string
  id: string
  // TODO: Remove optional when implemented
  organization_id?: string | null
}

interface AuthResponse {
  message: string
  data: AuthUserResponse
}

interface AuthRequest {
  user: AuthUserRequest
}

const authenticateUser = (
  response: AuthResponse,
  meta: FetchBaseQueryMeta | undefined,
) => {
  const authorizationHeader = meta?.response?.headers.get('Authorization')
  // TODO: Check if this will work..
  if (!authorizationHeader) {
    throw new Error('Error getting authorization header')
  }
  // // TODO: Test organization_id flow
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
