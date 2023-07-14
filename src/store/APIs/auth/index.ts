import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from 'src/store/APIs'

import { login, logout, register } from './actions'
import { Tags } from './types'

export const loginEndpointName = 'login'

export const authApi = createApi({
  baseQuery: baseQuery,
  endpoints: builder => ({
    [loginEndpointName]: login(builder),
    logout: logout(builder),
    register: register(builder),
  }),
  reducerPath: 'authApi',
  tagTypes: [Tags.Auth],
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  reducer: authApiReducer,
  reducerPath: authApiReducerPath,
} = authApi
