import { ParamListBase } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import React from 'react'

import { Routes } from './routes'

export interface ParamList extends ParamListBase {
  [Routes.Micelio]: { id: string }
  [Routes.Home]: undefined
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
