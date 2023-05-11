import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React, { useLayoutEffect } from 'react'
import { Linking, Text } from 'react-native'
import { Button } from 'src/components/Button'
import { SceneContainer } from 'src/components/sceneContainer'
import { APP_PREFIX, Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'

import { styles } from './styles'

export const Welcome: SceneProps<Routes.Welcome> = ({ navigation }) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      headerTitle: 'Welcome',
      headerTransparent: true,
    }
    navigation.setOptions(options)
  }, [navigation])

  return (
    <SceneContainer style={styles.container}>
      <Text>Welcome to the new React Native project</Text>
      <Button
        title={'Open micelio 5'}
        onPress={() => {
          Linking.openURL(`${APP_PREFIX}micelio/${5}`)
        }}
      />
    </SceneContainer>
  )
}
