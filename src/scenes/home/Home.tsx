import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React, { useLayoutEffect, useState } from 'react'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { FabMenu } from 'src/components/FabMenu'
import { Header } from 'src/components/Header'
import { Scanner } from 'src/components/Scanner'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledText } from 'src/components/StyledText'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { useLogoutMutation } from 'src/store/APIs/auth'

import { strings } from './strings'
import { styles } from './styles'

const buildHomeHeader = () => <Header title={strings.homeHeader} />

export const Home: SceneProps<Routes.Home> = ({ navigation }) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      header: buildHomeHeader,
      headerTransparent: true,
    }
    navigation.setOptions(options)
  }, [navigation])

  const [triggerLogout] = useLogoutMutation()
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
      <StyledText>Welcome to the Mushroom app!</StyledText>
      <Button
        title="Logout"
        mode={ButtonMode.LINK}
        onPress={() => triggerLogout()}
      />
      <FabMenu
        fabs={[
          { icon: 'home', onPress: handleOnPressNavigate(Routes.Home) },
          { icon: 'qrcode-scan', onPress: handleOpenModal },
          {
            icon: 'mushroom',
            onPress: handleOnPressNavigate(Routes.Rooms),
          },
        ]}
      />
    </SceneContainer>
  )
}