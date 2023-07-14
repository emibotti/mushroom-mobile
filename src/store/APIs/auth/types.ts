import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

import { BaseQueryFnType } from '../types'

export enum Endpoints {
  Login = '/login',
  Logout = '/logout',
  Register = '/signup',
}

export enum Tags {
  Auth = 'Auth',
}

export type Builder = EndpointBuilder<BaseQueryFnType, 'Auth', 'authApi'>

export interface AuthResponse {
  message: string
  csrf_token: string
}
