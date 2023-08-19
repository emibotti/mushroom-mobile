import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { useLayoutEffect } from 'react'
import React from 'react'
import { Header } from 'src/components/Header'
import { Routes } from 'src/navigation/routes'
import { NavigationProp } from 'src/navigation/types'

interface GoBackNavigationOptionsHook {
  navigation: NavigationProp<Routes>
  headerTransparent?: boolean
  title?: string
  rightElement?: React.ReactElement
}

interface BuildHeaderParams {
  navigation: NativeStackHeaderProps['navigation']
  title?: string
  rightElement?: React.ReactElement
  headerTransparent: boolean
}

const buildHeader =
  ({ navigation, title, rightElement, headerTransparent }: BuildHeaderParams) =>
  () =>
    (
      <Header
        onPress={navigation.goBack}
        title={title}
        rightElement={rightElement}
        transparent={headerTransparent}
      />
    )

export const useGoBackNavigationOptions = ({
  navigation,
  headerTransparent = false,
  title,
  rightElement,
}: GoBackNavigationOptionsHook) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      header: buildHeader({
        headerTransparent,
        navigation,
        rightElement,
        title,
      }),
      headerTransparent,
    }
    navigation.setOptions(options)
  }, [navigation, title, headerTransparent, rightElement])
}
