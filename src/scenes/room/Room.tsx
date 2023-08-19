import React from 'react'
import { Alert, FlatList, ListRenderItem } from 'react-native'
import { ActivityIndicator, Button, IconButton } from 'react-native-paper'
import { Container } from 'src/components/Container'
import { MyceliumCard } from 'src/components/MyceliumCard'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledText } from 'src/components/StyledText'
import { useGoBackNavigationOptions } from 'src/hooks/useGoBackNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { RouteProp, SceneProps } from 'src/navigation/types'
import { MyceliumCard as MyceliumCardType } from 'src/store/APIs/mycellium/types'
import { useGetRoomQuery } from 'src/store/APIs/rooms'
import { Palette } from 'src/styles/Palette'
import { AppTypography } from 'src/styles/types'

import { strings } from './strings'
import { styles } from './styles'

export const Room: SceneProps<Routes.Room> = ({ navigation, route }) => {
  useGoBackNavigationOptions({
    navigation,
    rightElement: (
      <IconButton
        icon={'trash-can-outline'}
        iconColor={Palette.ERROR_50}
        size={30}
        onPress={() => {
          Alert.alert(
            'No puede borrar el ambiente si tiene micelios existentes',
          )
        }}
      />
    ),
    title:
      (route as RouteProp<Routes.Room>).params.name ?? strings.roomHeaderTitle,
  })

  const roomId = route.params.id
  const { data: room, isLoading } = useGetRoomQuery({ id: roomId })

  const renderMyceliums: ListRenderItem<MyceliumCardType> = ({ item }) => (
    <MyceliumCard
      key={item.id}
      title={item.name}
      subtitle={item.type}
      onPress={() => {
        navigation.navigate(Routes.Mycelium, {
          id: item.id,
        })
      }}
    />
  )

  const onPressAddMycelium = () =>
    navigation.navigate(Routes.AddMycelium, {
      roomId,
    })

  return (
    <SceneContainer style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
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
                style={styles.agregarMicelioButton}
                onPress={onPressAddMycelium}>
                <StyledText>{strings.addMycelium}</StyledText>
              </Button>
            </>
          }
          showsVerticalScrollIndicator={false}
          data={room?.mycelia}
          renderItem={renderMyceliums}
        />
      )}
    </SceneContainer>
  )
}
