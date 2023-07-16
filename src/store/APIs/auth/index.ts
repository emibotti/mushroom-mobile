import { createApi } from '@reduxjs/toolkit/query/react'
import {
  baseQuery,
  loginEndpointName,
  registerEndpointName,
} from 'src/store/APIs'

import { login, logout, register } from './actions'

export const authApi = createApi({
  baseQuery: baseQuery,
  endpoints: builder => ({
    [loginEndpointName]: login(builder),
    logout: logout(builder),
    [registerEndpointName]: register(builder),
  }),
  reducerPath: 'authApi',
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,

  reducer: authApiReducer,
  reducerPath: authApiReducerPath,
} = authApi
