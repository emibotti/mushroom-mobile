import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React, { useLayoutEffect, useState } from 'react'
import { Linking, Text } from 'react-native'
import { FabMenu } from 'src/components/Fab/FabMenu'
import { Scanner } from 'src/components/Scanner/Scanner'
import { SceneContainer } from 'src/components/sceneContainer'
import { APP_PREFIX, Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'

import { styles } from './styles'

export const Home: SceneProps<Routes.Home> = ({ navigation }) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      headerTitle: '',
      headerTransparent: true,
    }
    navigation.setOptions(options)
  }, [navigation])

  const [isModalVisible, setModalVisible] = useState(false)

  const handleOpenModal = () => {
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  const handleOnPressNavigate = (screenName: string) => () => {
    navigation.navigate(screenName)
  }

  const navigateToMicelio = (micelioId: string) => () => {
    Linking.openURL(`${APP_PREFIX}micelio/${micelioId}`)
  }

  return (
    <SceneContainer style={styles.container}>
      <Scanner isVisible={isModalVisible} onClose={handleCloseModal} />
      <Text>Welcome to the Mushroom app!</Text>
      <FabMenu
        fabs={[
          { icon: 'home', onPress: handleOnPressNavigate(Routes.Home) },
          { icon: 'qrcode-scan', onPress: handleOpenModal },
          { icon: 'mushroom', onPress: navigateToMicelio('5') },
        ]}
      />
    </SceneContainer>
  )
}
