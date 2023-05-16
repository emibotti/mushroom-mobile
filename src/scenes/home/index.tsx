import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React, { useLayoutEffect, useState } from 'react'
import { Text } from 'react-native'
import { FabMenu } from 'src/components/FabMenu'
import { Header } from 'src/components/Header'
import { Scanner } from 'src/components/Scanner'
import { SceneContainer } from 'src/components/sceneContainer'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'

import { styles } from './styles'

const buildHomeHeader = () => <Header title="Mi Producción" />

export const Home: SceneProps<Routes.Home> = ({ navigation }) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      header: buildHomeHeader,
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

  return (
    <SceneContainer style={styles.container}>
      <Scanner isVisible={isModalVisible} onClose={handleCloseModal} />
      <Text>Welcome to the Mushroom app!</Text>
      <FabMenu
        fabs={[
          { icon: 'home', onPress: handleOnPressNavigate(Routes.Home) },
          { icon: 'qrcode-scan', onPress: handleOpenModal },
          {
            icon: 'mushroom',
            onPress: handleOnPressNavigate(Routes.Ambientes),
          },
        ]}
      />
    </SceneContainer>
  )
}
