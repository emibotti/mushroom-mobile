import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { Button } from 'react-native-paper'
import { Container } from 'src/components/Container'
import { LoadingActivityIndicator } from 'src/components/LoadingActivityIndicator'
import { MyceliumCard } from 'src/components/MyceliumCard'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledText } from 'src/components/StyledText'
import { useGoBackNavigationOptions } from 'src/hooks/useGoBackNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { ParamList, RouteProp, SceneProps } from 'src/navigation/types'
import { MyceliumCardType as MyceliumCardType } from 'src/store/APIs/mycellium/types'
import { useGetRoomQuery } from 'src/store/APIs/rooms'
import { Palette } from 'src/styles/Palette'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { strings } from './strings'
import { styles } from './styles'

export const renderMyceliaCards: (
  navigation: NavigationProp<ParamList, Routes>,
) => ListRenderItem<MyceliumCardType> =
  navigation =>
  ({ item }) =>
    (
      <MyceliumCard
        key={item.id}
        title={item.name}
        stageType={item.type}
        onPress={() => {
          navigation.navigate(Routes.Mycelium, {
            id: item.id,
          })
        }}
      />
    )

export const Room: SceneProps<Routes.Room> = ({ navigation, route }) => {
  useGoBackNavigationOptions({
    navigation,
    title:
      (route as RouteProp<Routes.Room>).params.name ?? strings.roomHeaderTitle,
  })

  const roomId = route.params.id
  const { data: room, isLoading } = useGetRoomQuery({ id: roomId })

  const onPressAddMycelium = () =>
    navigation.navigate(Routes.AddMycelium, {
      roomId,
    })

  return (
    <SceneContainer style={styles.container}>
      {isLoading ? (
        <LoadingActivityIndicator />
      ) : (
        <FlatList
          ListHeaderComponent={
            <>
              <Container>
                <StyledText typography={AppTypography.BODY_LARGE}>
                  {`<b>${strings.temperature}:</b> ${room?.temperature}`}
                </StyledText>
                <StyledText typography={AppTypography.BODY_LARGE}>
                  {`<b>${strings.humidity}:</b> ${room?.humidity}`}
                </StyledText>
                <StyledText typography={AppTypography.BODY_LARGE}>
                  {`<b>${strings.co2}:</b> ${room?.co2}`}
                </StyledText>
              </Container>
              <Button
                icon={'plus'}
                textColor={Palette.INFO_50}
                style={styles.agregarMicelioButton}
                onPress={onPressAddMycelium}>
                <StyledText>{strings.addMycelium}</StyledText>
              </Button>
            </>
          }
          showsVerticalScrollIndicator={false}
          data={room?.mycelia}
          renderItem={renderMyceliaCards(navigation)}
          ListEmptyComponent={
            <Container style={styles.noMycelium}>
              <StyledText
                typography={AppTypography.LABEL_MEDIUM}
                color={ColorPalette.SURFACE_70}>
                {strings.noMycelium}
              </StyledText>
            </Container>
          }
        />
      )}
    </SceneContainer>
  )
}
