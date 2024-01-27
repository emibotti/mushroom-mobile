import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React from 'react'
import { useLayoutEffect } from 'react'
import { IconButton } from 'react-native-paper'
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
      headerRight: () => (
        <IconButton
          size={20}
          icon="close"
          mode="contained"
          iconColor="black"
          containerColor="transparent"
          onPress={navigation.goBack}
        />
      ),
      headerTitleStyle: {
        fontSize: 18,
      },
      title: headerTitle,
    }
    navigation.setOptions(options)
  }, [navigation, headerTitle])
}
