import { ParamListBase } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import React from 'react'
import { EntityLink } from 'src/store/APIs/mycellium/types'

import { Routes } from './routes'

export interface ParamList extends ParamListBase {
  [Routes.Mycelium]: { id: string }
  [Routes.Home]: undefined
  [Routes.Rooms]: undefined
  [Routes.Room]: EntityLink
  [Routes.OrganizationCreated]: {
    invitationCode: string
  }
  [Routes.JoinOrganization]: {
    invitationCode?: string
  }
  [Routes.AddMycelium]?: {
    roomId?: string
    strainSource?: EntityLink
  }
  [Routes.AddMyceliumSuccess]: {
    createdMycelia: EntityLink[]
    type: string
  }
  [Routes.Inspect]: {
    myceliumId: string
  }
  [Routes.Harvest]: {
    roomId?: string
    strainSource: EntityLink
    flush?: number
  }
}

export type SceneProps<T extends keyof ParamList> = React.FunctionComponent<
  NativeStackScreenProps<ParamList, T>
>

export type NavigationProp<T extends keyof ParamList> =
  NativeStackNavigationProp<ParamList, T>

export type RouteProp<T extends keyof ParamList> = NativeStackScreenProps<
  ParamList,
  T
>['route']

export const Stack = createNativeStackNavigator<ParamList>()
