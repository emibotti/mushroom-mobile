import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

import { BaseQueryFnType } from '../types'

export enum Endpoints {
  Login = '/login',
  Logout = '/logout',
  Register = '/signup',
}

export type Builder = EndpointBuilder<BaseQueryFnType, 'Auth', 'authApi'>

export interface AuthUserRequest {
  email: string
  password: string
}

// TODO: Check if it is the best option to generalize this..
export interface AuthUserResponse {
  email?: string
  id?: string
  organization_id: string | null
}

export interface AuthResponse {
  message: string
  data: AuthUserResponse
}

export interface AuthRequest {
  user: AuthUserRequest
}
