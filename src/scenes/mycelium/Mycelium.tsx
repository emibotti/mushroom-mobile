// import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import FruitImage from 'src/assets/images/fruit-example.jpeg'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { Container } from 'src/components/Container'
import { ScrollableScreen } from 'src/components/ScrollableScreen/ScrollableScreen'
import { StyledText } from 'src/components/StyledText'
import { useGoBackNavigationOptions } from 'src/hooks/useGoBackNavigationOptions'
import { Routes } from 'src/navigation/routes'
// import { RouteProp, SceneProps } from 'src/navigation/types'
import { SceneProps } from 'src/navigation/types'
import { mockedMycelium } from 'src/store/APIs/mycellium/types'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { strings } from './strings'
import { styles } from './styles'

interface RowProps {
  attributeName: string
  value: string | number
  onPress?: () => void
}

const Row: React.FC<RowProps> = ({ attributeName, value, onPress }) => (
  <View style={styles.rowComponent}>
    <StyledText typography={AppTypography.BODY_LARGE_BOLD}>
      {attributeName}
    </StyledText>
    {onPress ? (
      <Button
        title={value.toString()}
        mode={ButtonMode.LINK}
        onPress={onPress}
      />
    ) : (
      <StyledText
        typography={AppTypography.BODY_LARGE}
        color={ColorPalette.SURFACE_70}>
        {value}
      </StyledText>
    )}
  </View>
)

export const Mycelium: SceneProps<Routes.Mycelium> = ({ navigation }) => {
  // const route: RouteProp<Routes.Mycelium> = useRoute()
  // const { id } = route.params

  const mycellium = mockedMycelium

  useGoBackNavigationOptions(navigation)

  const navigateToMycellium = (id: string) => () =>
    navigation.navigate(Routes.Mycelium, {
      id,
    })

  return (
    <View style={styles.container}>
      <ScrollableScreen
        image={FruitImage}
        buttonProps={{ title: strings.inspectButtonLabel }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <View>
              <StyledText typography={AppTypography.H1}>
                {mycellium.name}
              </StyledText>
              <View style={styles.stageTag}>
                <StyledText style={styles.stage}>{mycellium.stage}</StyledText>
              </View>
            </View>
          </View>
          <View>
            <Row attributeName={strings.species} value={mycellium.species} />
            <Row
              attributeName={strings.inoculationDate}
              value={mycellium.inoculationDate.toLocaleString({
                day: 'numeric',
                month: 'long',
              })}
            />
            <Row
              attributeName={strings.strainSource}
              value={
                mycellium.strainSource
                  ? mycellium.strainSource.name
                  : mycellium.externalProvider ?? ''
              }
              onPress={
                mycellium.strainSource
                  ? navigateToMycellium(mycellium.strainSource.id)
                  : undefined
              }
            />
            <Row
              attributeName={strings.substrate}
              value={mycellium.substrate}
            />
            <Row
              attributeName={strings.generation}
              value={mycellium.generation}
            />
          </View>
          <Container style={styles.strainDescriptionContainer}>
            <StyledText typography={AppTypography.H1}>
              {strings.strainDescription}
            </StyledText>
            <StyledText
              style={styles.strainDescription}
              typography={AppTypography.BODY_MEDIUM}
              color={ColorPalette.SURFACE_70}>
              {mycellium.strainDescription}
            </StyledText>
          </Container>
          <Container style={styles.historyContainer}>
            <StyledText typography={AppTypography.H1}>
              {strings.history}
            </StyledText>
          </Container>
        </View>
      </ScrollableScreen>
    </View>
  )
}
