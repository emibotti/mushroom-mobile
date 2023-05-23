import { useRoute } from '@react-navigation/native'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'
import FruitImage from 'src/assets/images/fruit-example.jpeg'
import { CloseButton } from 'src/components/CloseButton'
import { ScrollableScreen } from 'src/components/ScrollableScreen/ScrollableScreen'
import { StyledText } from 'src/components/StyledText'
import { Routes } from 'src/navigation/routes'
import { RouteProp, SceneProps } from 'src/navigation/types'
import { Spacing } from 'src/styles/Spacing'
import { AppTypography, ColorPalette, SpacingScale } from 'src/styles/types'

import { styles } from './styles'

const buildHeaderLeft = (onPress: () => void) => () =>
  <CloseButton onPress={onPress} />

const buildHeader = (title: string) => () =>
  (
    <StyledText
      typography={AppTypography.H3}
      color={ColorPalette.SECONDARY_50}
      style={styles.headerTitle}
      numberOfLines={2}>
      {title}
    </StyledText>
  )

export const Mycelium: SceneProps<Routes.Mycelium> = ({ navigation }) => {
  const route: RouteProp<Routes.Mycelium> = useRoute()
  const { id, name } = route.params

  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      headerLeft: buildHeaderLeft(navigation.goBack),
      headerTitle: buildHeader(name),
    }
    navigation.setOptions(options)
  }, [navigation, name])

  return (
    <View style={styles.container}>
      <ScrollableScreen image={FruitImage}>
        <View
          style={{
            padding: Spacing[SpacingScale.HORIZONTAL_SCREEN_PADDING],
          }}>
          <View style={styles.row}>
            <View>
              <StyledText typography={AppTypography.H1}>{name}</StyledText>
              <View style={styles.stageTag}>
                <StyledText style={styles.stage}>Culture</StyledText>
              </View>
            </View>
          </View>
          <View style={styles.centeredContent}>
            {Array(15)
              .fill(0)
              .map(() => (
                <StyledText style={styles.exampleItem}>
                  {id ? `Micelio con id: ${id}` : 'Empty'}
                </StyledText>
              ))}
          </View>
        </View>
      </ScrollableScreen>
    </View>
  )
}
