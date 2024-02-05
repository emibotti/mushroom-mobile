import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import React, { useLayoutEffect, useState } from 'react'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { FabMenu } from 'src/components/FabMenu'
import { Scanner } from 'src/components/Scanner'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledText } from 'src/components/StyledText'
import { Routes } from 'src/navigation/routes'
import { ParamList, SceneProps } from 'src/navigation/types'
import { AppTypography } from 'src/styles/types'

import { strings } from './strings'
import { styles } from './styles'

const buildHeaderLeft = () => (
  <View style={styles.headerLeft}>
    <StyledText typography={AppTypography.H1}>{strings.homeHeader}</StyledText>
  </View>
)

const buildHeaderRight =
  (navigation: NativeStackNavigationProp<ParamList, Routes.Home, undefined>) =>
  () =>
    (
      <IconButton
        hitSlop={50}
        icon={'account-circle'}
        size={50}
        style={styles.headerRight}
        onPress={() => navigation.navigate(Routes.Profile)}
      />
    )

export const Home: SceneProps<Routes.Home> = ({ navigation }) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      headerLeft: buildHeaderLeft,
      headerRight: buildHeaderRight(navigation),
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

  return (
    <SceneContainer style={styles.container}>
      <Scanner isVisible={isModalVisible} onClose={handleCloseModal} />
      <StyledText>Welcome to the Mushroom app!</StyledText>
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
