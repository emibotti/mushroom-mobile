import { createApi } from '@reduxjs/toolkit/query/react'
import {
  baseQuery,
  loginEndpointName,
  registerEndpointName,
} from 'src/store/APIs'

import {
  createOrganization,
  joinOrganization,
  login,
  logout,
  register,
} from './actions'
import { Tags } from './types'

export const authApi = createApi({
  baseQuery: baseQuery,
  endpoints: builder => ({
    createOrganization: createOrganization(builder),
    joinOrganization: joinOrganization(builder),
    [loginEndpointName]: login(builder),
    logout: logout(builder),
    [registerEndpointName]: register(builder),
  }),
  reducerPath: 'authApi',
  // TODO: Is it needed to have Tags.Auth??
  tagTypes: [Tags.Auth],
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useCreateOrganizationMutation,
  useJoinOrganizationMutation,
  reducer: authApiReducer,
  reducerPath: authApiReducerPath,
} = authApi
