import { LinkingOptions } from '@react-navigation/native'

import { ParamList } from './types'

export enum Routes {
  Home = 'Home',
  Mycelium = 'Mycelium',
  Rooms = 'Rooms',
  Room = 'Room',
  Login = 'Login',
}

export enum StackRoutes {
  Authenticated = 'Authenticated',
  Unauthenticated = 'Unauthenticated',
}

export const APP_PREFIX = 'mushroom://'

export enum NavigationRoutes {
  Mycelium = 'mycelium/:id',
}

export const linking: LinkingOptions<ParamList> = {
  config: {
    screens: {
      [Routes.Mycelium]: NavigationRoutes.Mycelium,
    },
  },
  prefixes: [APP_PREFIX],
}

// mushroom://mycelium/1
