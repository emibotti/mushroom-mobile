import { useRoute } from '@react-navigation/native'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import FruitImage from 'src/assets/images/fruit-example.jpeg'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { Container } from 'src/components/Container'
import { ScrollableScreen } from 'src/components/ScrollableScreen/ScrollableScreen'
import { StyledText } from 'src/components/StyledText'
import { useGoBackNavigationOptions } from 'src/hooks/useGoBackNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { RouteProp, SceneProps } from 'src/navigation/types'
import { useGetMyceliumQuery } from 'src/store/APIs/mycellium'
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
    <StyledText
      typography={AppTypography.BODY_LARGE_BOLD}
      style={{ marginRight: 10 }}>
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
  const route: RouteProp<Routes.Mycelium> = useRoute()
  const { id } = route.params

  const { data: mycelium, isFetching } = useGetMyceliumQuery({ id })

  useGoBackNavigationOptions(navigation, true)

  const navigateToMycellium = (myceliumToNavigate: string) => () =>
    navigation.push(Routes.Mycelium, {
      id: myceliumToNavigate,
    })

  console.log('inoculation date', mycelium?.inoculationDate)

  return isFetching ? (
    <ActivityIndicator />
  ) : mycelium ? (
    <View style={styles.container}>
      <ScrollableScreen
        image={FruitImage}
        buttonProps={{ title: strings.inspectButtonLabel }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <View>
              <StyledText typography={AppTypography.H1}>
                {mycelium.name}
              </StyledText>
              <View style={styles.stageTag}>
                <StyledText style={styles.stage}>{mycelium.stage}</StyledText>
              </View>
            </View>
          </View>
          <Container>
            <Row attributeName={strings.species} value={mycelium.species} />
            {mycelium.inoculationDate && (
              <Row
                attributeName={strings.inoculationDate}
                value={mycelium.inoculationDate.toLocaleString({
                  day: 'numeric',
                  month: 'long',
                })}
              />
            )}
            <Row
              attributeName={strings.strainSource}
              value={
                mycelium.strainSource
                  ? mycelium.strainSource.name
                  : mycelium.externalProvider ?? ''
              }
              onPress={
                mycelium.strainSource
                  ? navigateToMycellium(mycelium.strainSource.id)
                  : undefined
              }
            />
            <Row attributeName={strings.substrate} value={mycelium.substrate} />
            <Row
              attributeName={strings.generation}
              value={mycelium.generation}
            />
          </Container>
          <Container style={styles.strainDescriptionContainer}>
            <StyledText typography={AppTypography.H1}>
              {strings.strainDescription}
            </StyledText>
            <StyledText
              style={styles.strainDescription}
              typography={AppTypography.BODY_MEDIUM}
              color={ColorPalette.SURFACE_70}>
              {mycelium.strainDescription}
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
  ) : (
    <View>
      <StyledText>
        {`This QR doesn't have an associated mycelium yet, do you want to create it?`}
      </StyledText>
    </View>
  )
}
