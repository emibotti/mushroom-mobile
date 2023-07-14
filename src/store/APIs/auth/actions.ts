import { FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query'
import {
  clearPersistedObject,
  getPersistedObject,
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

// TODO: Check if it is the best option to generalize this..
interface AuthUserResponse {
  email?: string
  id?: string
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

const authenticateOrganization = (response: AuthResponse) => {
  // TODO: Review if it is needed to clear it
  clearPersistedObject(KeysPersisted.USER)
  persistObject<PersistedUser>(
    {
      ...getPersistedObject(KeysPersisted.USER),
      hasOrganization: !!response.data.organization_id,
    },
    KeysPersisted.USER,
  )
  return response
}

interface NewOrganization {
  name: string
}

interface NewOrganizationRequest {
  organization: NewOrganization
}

interface JoinOrganizationRequest {
  invitation_code: string
}

export const createOrganization = (builder: Builder) =>
  builder.mutation<AuthResponse, NewOrganization>({
    query: ({ name }) => ({
      body: {
        organization: { name },
      } as NewOrganizationRequest,
      method: HttpMethod.Post,
      url: Endpoints.CreateOrganization,
    }),
    // TODO: Is the response the same? Or should we shape it as the user?
    transformResponse: authenticateOrganization,
  })

export const joinOrganization = (builder: Builder) =>
  builder.mutation<AuthResponse, JoinOrganizationRequest>({
    query: ({ invitation_code }) => ({
      body: {
        invitation_code,
      } as JoinOrganizationRequest,
      method: HttpMethod.Post,
      url: Endpoints.CreateOrganization,
    }),
    // TODO: Is the response the same? Or should we shape it as the user?
    transformResponse: authenticateOrganization,
  })
