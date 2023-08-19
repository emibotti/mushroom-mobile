import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { Button } from 'react-native-paper'
import { Card } from 'src/components/Card'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledText } from 'src/components/StyledText'
import { useGoBackNavigationOptions } from 'src/hooks/useGoBackNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { useGetRoomsQuery } from 'src/store/APIs/rooms'

import { strings } from './strings'
import { styles } from './styles'

interface Room {
  name: string
  id: string
}

export const Rooms: SceneProps<Routes.Rooms> = ({ navigation }) => {
  useGoBackNavigationOptions({ navigation, title: strings.roomsHeaderTitle })

  const { data: rooms } = useGetRoomsQuery()

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
      <FlatList
        ListHeaderComponent={
          <Button
            icon={'plus'}
            style={styles.addRoomButton}
            onPress={onPressAddRoom}>
            <StyledText>{strings.addRoom}</StyledText>
          </Button>
        }
        showsVerticalScrollIndicator={false}
        data={rooms}
        renderItem={renderRooms}
        // TODO: Define empty component
        // ListEmptyComponent={() => (
        //   <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        //     <StyledText>{'No rooms yet'}</StyledText>
        //   </View>
        // )}
      />
    </SceneContainer>
  )
}
