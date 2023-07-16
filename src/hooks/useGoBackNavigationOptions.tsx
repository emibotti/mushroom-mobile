import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { useLayoutEffect } from 'react'
import React from 'react'
import { Header } from 'src/components/Header'
import { Routes } from 'src/navigation/routes'
import { NavigationProp } from 'src/navigation/types'

const buildHeader = (props: NativeStackHeaderProps) => (
  <Header onPress={props.navigation.goBack} />
)

export const useGoBackNavigationOptions = (
  navigation: NavigationProp<Routes>,
) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      header: buildHeader,
      headerTransparent: true,
    }
    navigation.setOptions(options)
  }, [navigation])
}
