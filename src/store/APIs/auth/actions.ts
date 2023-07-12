import { baseApi, HttpMethod } from 'src/store/APIs'
import { setSession } from 'src/store/storage/headers'

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
    onQueryStarted(_, api) {
      api.queryFulfilled.then(response => {
        const authorizationHeader =
          response.meta?.response?.headers.get('Authorization')
        api.dispatch(setSession(authorizationHeader))
      })
    },
    query: ({ email, password }) => ({
      body: {
        user: { email, password },
      },
      method: HttpMethod.Post,
      url: Endpoints.Login,
    }),
    // TODO: Si persisto la respuesta no necesito usar el `setSession`
    // transformResponse: (data: AuthResponse) => {
    //   return data
    // },
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
    // transformResponse: (data: AuthResponse) => {
    //  // remove persisted data
    //   return data
    // },
  })
