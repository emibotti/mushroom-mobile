import React from 'react'
import { Alert, FlatList, ListRenderItem } from 'react-native'
import { Button, IconButton } from 'react-native-paper'
import { Container } from 'src/components/Container'
import { MyceliumCard } from 'src/components/MyceliumCard'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledText } from 'src/components/StyledText'
import { useGoBackNavigationOptions } from 'src/hooks/useGoBackNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { RouteProp, SceneProps } from 'src/navigation/types'
import { useGetRoomQuery } from 'src/store/APIs/rooms'
import { RoomMycelium } from 'src/store/APIs/rooms/types'
import { Palette } from 'src/styles/Palette'
import { AppTypography } from 'src/styles/types'

import { strings } from './strings'
import { styles } from './styles'

export const Room: SceneProps<Routes.Room> = ({ navigation, route }) => {
  useGoBackNavigationOptions(
    navigation,
    false,
    (route as RouteProp<Routes.Room>).params.name ?? strings.roomHeaderTitle,
    <IconButton
      icon={'trash-can-outline'}
      iconColor={Palette.ERROR_50}
      size={30}
      onPress={() => {
        Alert.alert('No puede borrar el ambiente si tiene micelios existentes')
      }}
    />,
  )

  const { data: room } = useGetRoomQuery({ id: route.params.id })

  const renderMyceliums: ListRenderItem<RoomMycelium> = ({ item }) => (
    <MyceliumCard
      key={item.id}
      title={item.name}
      subtitle={item.strain}
      onPress={() => {
        navigation.navigate(Routes.Mycelium, {
          id: item.id,
        })
      }}
    />
  )

  const onPressAddMycelium = () => navigation.navigate(Routes.Home)

  return (
    <SceneContainer style={styles.container}>
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
              style={styles.agregarMicelioButton}
              onPress={onPressAddMycelium}>
              <StyledText>{strings.addMycelium}</StyledText>
            </Button>
          </>
        }
        showsVerticalScrollIndicator={false}
        data={room?.mycellia}
        renderItem={renderMyceliums}
      />
    </SceneContainer>
  )
}
