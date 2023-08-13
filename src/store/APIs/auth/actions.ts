import { FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query'
import {
  clearPersistedObject,
  KeysPersisted,
  PersistedUser,
  persistObject,
} from 'src/common/persistance'
import { baseApi, HttpMethod } from 'src/store/APIs'

import { BaseQueryFnType, PerformActionResponse } from '../types'
import {
  AuthRequest,
  AuthResponse,
  AuthUserRequest,
  Builder,
  Endpoints,
} from './types'
import { setActiveUser } from 'src/store/storage/session/sessionSlice'
import { MutationLifecycleApi } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

const authenticateUser = async (
  _: AuthUserRequest,
  api: MutationLifecycleApi<
    AuthUserRequest,
    BaseQueryFnType,
    AuthResponse,
    'authApi'
  >,
) => {
  const response = await api.queryFulfilled
  const authorizationHeader =
    response.meta?.response?.headers.get('Authorization')

  console.log('response', response)
  console.log('authorization headers', authorizationHeader)

  if (!authorizationHeader) {
    throw new Error('Error getting authorization header')
  }

  const userToPersist: PersistedUser = {
    hasOrganization: !!response.data.data.organization_id,
    session: authorizationHeader,
  }

  api.dispatch(setActiveUser(userToPersist))
  await persistObject<PersistedUser>(userToPersist, KeysPersisted.USER)
}

export const login = (builder: Builder) =>
  builder.mutation<AuthResponse, AuthUserRequest>({
    onQueryStarted: authenticateUser,
    query: ({ email, password }) => ({
      body: {
        user: { email, password },
      } as AuthRequest,
      method: HttpMethod.Post,
      url: Endpoints.Login,
    }),
  })

export const logout = (builder: Builder) =>
  builder.mutation<PerformActionResponse, void>({
    onQueryStarted(_, api) {
      api.queryFulfilled.finally(() => {
        clearPersistedObject(KeysPersisted.USER)
        api.dispatch(setActiveUser(undefined))
        api.dispatch(baseApi.util.resetApiState())
      })
    },
    query: () => ({
      method: HttpMethod.Delete,
      url: Endpoints.Logout,
    }),
  })

export const register = (builder: Builder) =>
  builder.mutation<AuthResponse, AuthUserRequest>({
    onQueryStarted: authenticateUser,
    query: ({ email, password }) => ({
      body: {
        user: { email, password },
      } as AuthRequest,
      method: HttpMethod.Post,
      url: Endpoints.Register,
    }),
  })
