import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from 'src/store/APIs'

import { login, logout } from './actions'
import { Tags } from './types'

export const loginEndpointName = 'login'

export const authApi = createApi({
  baseQuery: baseQuery,
  endpoints: builder => ({
    [loginEndpointName]: login(builder),
    logout: logout(builder),
  }),
  reducerPath: 'authApi',
  tagTypes: [Tags.Auth],
})

export const {
  useLoginMutation,
  useLogoutMutation,
  reducer: authApiReducer,
  reducerPath: authApiReducerPath,
} = authApi
