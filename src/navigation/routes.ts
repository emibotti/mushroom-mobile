import { LinkingOptions } from '@react-navigation/native'

import { ParamList } from './types'

export enum Routes {
  Home = 'Home',
  Mycelium = 'Mycelium',
  Rooms = 'Rooms',
  Room = 'Room',
  Login = 'Login',
  Register = 'Register',
  CreateOrganization = 'CreateOrganization',
  JoinOrganization = 'JoinOrganization',
  OrganizationCreated = 'OrganizationCreated',
}

export enum StackRoutes {
  Authenticated = 'Authenticated',
  Unauthenticated = 'Unauthenticated',
}

export const APP_PREFIX = 'mushroom://'

export enum NavigationRoutes {
  Mycelium = 'mycelium/:id',
  JoinOrganization = 'join_organization/:invitationCode',
}

export const linking: LinkingOptions<ParamList> = {
  config: {
    screens: {
      [Routes.Mycelium]: NavigationRoutes.Mycelium,
      [Routes.JoinOrganization]: NavigationRoutes.JoinOrganization,
    },
  },
  prefixes: [APP_PREFIX],
}

// mushroom://mycelium/1
