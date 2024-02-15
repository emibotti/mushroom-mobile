import { useRoute } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import ArchiveIcon from 'src/assets/icons/mycelium/archive.svg'
import NotReadyIcon from 'src/assets/icons/mycelium/notReady.svg'
import ReadyIcon from 'src/assets/icons/mycelium/ready.svg'
import BulkImagePlaceholder from 'src/assets/images/bulk_example.png'
import CultureImagePlaceholder from 'src/assets/images/culture_example.png'
import FruitImagePlaceholder from 'src/assets/images/fruit_example.jpeg'
import SpawnImagePlaceholder from 'src/assets/images/spawn_example.png'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { Container } from 'src/components/Container'
import { LoadingActivityIndicator } from 'src/components/LoadingActivityIndicator'
import { MyceliumHistory } from 'src/components/MyceliumHistory/MyceliumHistory'
import { SceneContainer } from 'src/components/SceneContainer'
import { ScrollableScreen } from 'src/components/ScrollableScreen/ScrollableScreen'
import { StyledText } from 'src/components/StyledText'
import { useGoBackNavigationOptions } from 'src/hooks/useGoBackNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { RouteProp, SceneProps } from 'src/navigation/types'
import { useGetMyceliumQuery } from 'src/store/APIs/mycellium'
import { StageResponse } from 'src/store/APIs/mycellium/types'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { strings } from './strings'
import { styles } from './styles'

interface RowProps {
  attributeName: string
  value: string | number
  onPress?: () => void
}

export const stageImagePlaceholder = (stage: StageResponse) => {
  switch (stage) {
    case StageResponse.Culture:
      return CultureImagePlaceholder
    case StageResponse.Spawn:
      return SpawnImagePlaceholder
    case StageResponse.Bulk:
      return BulkImagePlaceholder
    case StageResponse.Fruit:
      return FruitImagePlaceholder
  }
}

const Row: React.FC<RowProps> = ({ attributeName, value, onPress }) => (
  <View style={styles.rowComponent}>
    <StyledText
      typography={AppTypography.BODY_LARGE_BOLD}
      style={styles.rowText}>
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

  const onPressInoculationButton = () => {
    if (mycelium) {
      navigation.push(
        mycelium.stage === StageResponse.Bulk
          ? Routes.Harvest
          : Routes.AddMycelium,
        {
          flush: mycelium.flush,
          roomId: mycelium?.room?.id,
          strainSource: {
            id,
            name: mycelium.name,
          },
        },
      )
    }
  }

  useGoBackNavigationOptions({
    headerTransparent: true,
    navigation,
    rightElement: mycelium && (
      <Button
        title={
          mycelium.stage === StageResponse.Bulk
            ? strings.harvestButton
            : strings.inoculationButton
        }
        onPress={onPressInoculationButton}
        style={styles.inoculationButton}
        mode={ButtonMode.PRIMARY_RECTANGULAR_SOLID}
      />
    ),
  })

  const navigateToMycellium = (myceliumToNavigate: string) => () =>
    navigation.push(Routes.Mycelium, {
      id: myceliumToNavigate,
    })

  const navigateToInspectMycelium = () => {
    navigation.push(Routes.Inspect, {
      myceliumId: id,
    })
  }

  const navigateToArchiveMycelium = () => {
    navigation.push(Routes.MyceliumExit, {
      myceliumId: id,
    })
  }

  const isReady = mycelium?.ready ?? false

  const navigateToMarkAsReady = () => {
    navigation.push(Routes.MarkAsReady, {
      isReadyFromTheBackend: isReady,
      myceliumId: id,
    })
  }

  return isFetching ? (
    <LoadingActivityIndicator />
  ) : mycelium ? (
    <View style={styles.container}>
      <ScrollableScreen
        image={
          mycelium.imageUrl
            ? { uri: mycelium.imageUrl }
            : stageImagePlaceholder(mycelium.stage as StageResponse)
        }
        buttonProps={{
          onPress: navigateToInspectMycelium,
          title: strings.inspectButtonLabel,
        }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <View>
              <StyledText typography={AppTypography.H1} numberOfLines={1}>
                {mycelium.name}
              </StyledText>
              <View style={styles.stageTag}>
                <StyledText style={styles.stage}>{mycelium.stage}</StyledText>
              </View>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={navigateToMarkAsReady}
                style={styles.rightMenuButton}>
                {isReady ? <ReadyIcon /> : <NotReadyIcon />}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={navigateToArchiveMycelium}
                style={styles.lastRightMenuButton}>
                <ArchiveIcon />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.attributesContainer}>
            <Row attributeName={strings.species} value={mycelium.species} />
            {mycelium.inoculationDate && (
              <Row
                attributeName={strings.inoculationDate}
                value={mycelium?.inoculationDate}
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
            {mycelium.weight && (
              <Row attributeName={strings.weight} value={mycelium.weight} />
            )}
            {mycelium.room && (
              <Row attributeName={strings.room} value={mycelium.room.name} />
            )}
          </View>
          <View style={styles.strainDescriptionContainer}>
            <StyledText typography={AppTypography.H1}>
              {strings.strainDescription}
            </StyledText>
            <StyledText
              style={styles.strainDescription}
              typography={AppTypography.BODY_MEDIUM}
              parsedEnabled
              color={ColorPalette.SURFACE_70}>
              {mycelium.strainDescription}
            </StyledText>
          </View>
          <View style={styles.historyContainer}>
            <StyledText typography={AppTypography.H1}>
              {strings.history}
            </StyledText>
            <MyceliumHistory myceliumId={id} />
          </View>
        </View>
      </ScrollableScreen>
    </View>
  ) : (
    <SceneContainer style={styles.centeredContent}>
      <Container>
        <StyledText
          style={styles.textCenter}
          typography={AppTypography.BODY_LARGE}>
          {strings.myceliumNotFound}
        </StyledText>
      </Container>
    </SceneContainer>
  )
}
