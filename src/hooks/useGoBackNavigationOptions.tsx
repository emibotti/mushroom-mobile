import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { useLayoutEffect } from 'react'
import React from 'react'
import { Header } from 'src/components/Header'
import { Routes } from 'src/navigation/routes'
import { NavigationProp } from 'src/navigation/types'

const buildHeader =
  (
    navigation: NativeStackHeaderProps['navigation'],
    title?: string,
    rightElement?: React.ReactElement,
  ) =>
  () =>
    (
      <Header
        onPress={navigation.goBack}
        title={title}
        rightElement={rightElement}
      />
    )

export const useGoBackNavigationOptions = (
  navigation: NavigationProp<Routes>,
  headerTransparent = false,
  title?: string,
  rightElement?: React.ReactElement,
) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      header: buildHeader(navigation, title, rightElement),
      headerTransparent,
    }
    navigation.setOptions(options)
  }, [navigation, title, headerTransparent, rightElement])
}
