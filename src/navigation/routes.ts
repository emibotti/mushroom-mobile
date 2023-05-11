import { LinkingOptions } from '@react-navigation/native'

import { ParamList } from './types'

export enum Routes {
  Welcome = 'Welcome',
  Micelio = 'Micelio',
}

export const APP_PREFIX = 'mushroom://'

export enum NavigationRoutes {
  Micelio = 'micelio/:id',
}

export const linking: LinkingOptions<ParamList> = {
  config: {
    // TODO: Is it necessary?
    initialRouteName: Routes.Welcome,
    screens: {
      Micelio: NavigationRoutes.Micelio,
    },
  },
  prefixes: [APP_PREFIX],
}

// mushroom://micelio/1
