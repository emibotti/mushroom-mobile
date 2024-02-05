import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { useLayoutEffect } from 'react'
import { Routes } from 'src/navigation/routes'
import { NavigationProp } from 'src/navigation/types'

interface ModalSetNavigationOptionsParams {
  navigation: NavigationProp<Routes>
  headerTitle?: string
}

export const useModalSetNavigationOptions = ({
  navigation,
  headerTitle,
}: ModalSetNavigationOptionsParams) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      headerBackVisible: true,
    }
    navigation.setOptions(options)
  }, [navigation, headerTitle])
}
