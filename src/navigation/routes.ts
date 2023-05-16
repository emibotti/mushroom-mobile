import { LinkingOptions } from '@react-navigation/native'

import { ParamList } from './types'

export enum Routes {
  Home = 'Home',
  Micelio = 'Micelio',
  Ambientes = 'Ambientes',
  Ambiente = 'Ambiente',
}

export const APP_PREFIX = 'mushroom://'

export enum NavigationRoutes {
  Micelio = 'micelio/:id',
}

export const linking: LinkingOptions<ParamList> = {
  config: {
    screens: {
      [Routes.Micelio]: NavigationRoutes.Micelio,
    },
  },
  prefixes: [APP_PREFIX],
}

// mushroom://micelio/1
