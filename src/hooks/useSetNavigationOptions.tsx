import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { useLayoutEffect } from 'react'
import { Routes } from 'src/navigation/routes'
import { NavigationProp } from 'src/navigation/types'
import { Palette } from 'src/styles/Palette'

// TODO: Type as T or any?
export const useSetNavigationOptions = (navigation: NavigationProp<Routes>) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      headerBackTitleVisible: false,
      // TODO: Check this
      // headerStyle: headerStyle,
      headerTintColor: Palette.TRANSPARENT,
      headerTransparent: true,
    }
    navigation.setOptions(options)
  }, [navigation])
}
