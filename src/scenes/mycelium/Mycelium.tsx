import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import FruitImage from 'src/assets/images/fruit-example.jpeg'
import { ScrollableScreen } from 'src/components/ScrollableScreen/ScrollableScreen'
import { StyledText } from 'src/components/StyledText'
import { useGoBackNavigationOptions } from 'src/hooks/useGoBackNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { RouteProp, SceneProps } from 'src/navigation/types'
import { Spacing } from 'src/styles/Spacing'
import { AppTypography, SpacingScale } from 'src/styles/types'

import { styles } from './styles'

export const Mycelium: SceneProps<Routes.Mycelium> = ({ navigation }) => {
  const route: RouteProp<Routes.Mycelium> = useRoute()
  const { id, name } = route.params

  useGoBackNavigationOptions(navigation)

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
