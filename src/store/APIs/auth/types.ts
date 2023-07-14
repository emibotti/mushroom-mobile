import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

import { BaseQueryFnType } from '../types'

export enum Endpoints {
  Login = '/login',
  Logout = '/logout',
  Register = '/signup',
  CreateOrganization = '/organizations',
  JoinOrganization = '/join_organization',
}

export enum Tags {
  Auth = 'Auth',
}

export type Builder = EndpointBuilder<BaseQueryFnType, 'Auth', 'authApi'>

export interface AuthResponse {
  message: string
  csrf_token: string
}
