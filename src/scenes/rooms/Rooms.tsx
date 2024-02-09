import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { Button } from 'react-native-paper'
import { Card } from 'src/components/Card'
import { Container } from 'src/components/Container'
import { LoadingActivityIndicator } from 'src/components/LoadingActivityIndicator'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledText } from 'src/components/StyledText'
import { useGoBackNavigationOptions } from 'src/hooks/useGoBackNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { useGetRoomsQuery } from 'src/store/APIs/rooms'
import { Palette } from 'src/styles/Palette'

import { strings } from './strings'
import { styles } from './styles'

interface Room {
  name: string
  id: string
}

const renderEmptyRooms = () => (
  <Container style={styles.noRoomsContainer}>
    <StyledText>{strings.noRooms}</StyledText>
  </Container>
)

export const Rooms: SceneProps<Routes.Rooms> = ({ navigation }) => {
  useGoBackNavigationOptions({ navigation, title: strings.roomsHeaderTitle })

  const { data: rooms, isLoading } = useGetRoomsQuery()

  const onPressAddRoom = () => navigation.navigate(Routes.AddRoom)
  const onPressCard = (id: string, name: string) => () =>
    navigation.navigate(Routes.Room, { id, name })

  const renderRooms: ListRenderItem<Room> = ({ item }) => (
    <Card
      key={item.id}
      content={item.name}
      onPress={onPressCard(item.id, item.name)}
    />
  )

  return (
    <SceneContainer style={styles.container}>
      {isLoading ? (
        <LoadingActivityIndicator />
      ) : (
        <FlatList
          ListHeaderComponent={
            <Button
              icon={'plus'}
              textColor={Palette.INFO_50}
              style={styles.addRoomButton}
              onPress={onPressAddRoom}>
              <StyledText>{strings.addRoom}</StyledText>
            </Button>
          }
          showsVerticalScrollIndicator={false}
          data={rooms}
          renderItem={renderRooms}
          ListEmptyComponent={renderEmptyRooms}
        />
      )}
    </SceneContainer>
  )
}
