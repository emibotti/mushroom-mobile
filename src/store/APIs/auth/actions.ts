import {
  clearPersistedObject,
  KeysPersisted,
  persistObject,
} from 'src/common/persistance'
import { baseApi, HttpMethod } from 'src/store/APIs'

import { PerformActionResponse } from '../types'
import { Builder, Endpoints, Tags } from './types'

interface AuthUser {
  email: string
  password: string
}

interface SerializedAuthUser {
  user: AuthUser
}

export const login = (builder: Builder) =>
  builder.mutation<SerializedAuthUser, AuthUser>({
    invalidatesTags: [Tags.Auth],
    query: ({ email, password }) => ({
      body: {
        user: { email, password },
      },
      method: HttpMethod.Post,
      url: Endpoints.Login,
    }),
    transformResponse: (data: SerializedAuthUser, meta) => {
      const authorizationHeader = meta?.response?.headers.get('Authorization')
      persistObject(authorizationHeader, KeysPersisted.SESSION_KEY)
      return data
    },
  })

export const logout = (builder: Builder) =>
  builder.mutation<PerformActionResponse, void>({
    invalidatesTags: [Tags.Auth],
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
      clearPersistedObject(KeysPersisted.SESSION_KEY)
      return data
    },
  })

export const register = (builder: Builder) =>
  builder.mutation<SerializedAuthUser, AuthUser>({
    invalidatesTags: [Tags.Auth],
    query: ({ email, password }) => ({
      body: {
        user: { email, password },
      },
      method: HttpMethod.Post,
      url: Endpoints.Register,
    }),
    transformResponse: (data: SerializedAuthUser, meta) => {
      const authorizationHeader = meta?.response?.headers.get('Authorization')
      persistObject(authorizationHeader, KeysPersisted.SESSION_KEY)
      return data
    },
  })
