import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import React, { useLayoutEffect } from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { Button } from 'react-native-paper'
import { Card } from 'src/components/Card'
import { Header } from 'src/components/Header'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledText } from 'src/components/StyledText'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { useGetRoomsQuery } from 'src/store/APIs/rooms'

import { strings } from './strings'
import { styles } from './styles'

interface Room {
  name: string
  id: string
}

const buildHeader = (props: NativeStackHeaderProps) => (
  <Header title={strings.roomsHeaderTitle} onPress={props.navigation.goBack} />
)

export const Rooms: SceneProps<Routes.Rooms> = ({ navigation }) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      header: buildHeader,
      headerTransparent: true,
    }
    navigation.setOptions(options)
  }, [navigation])

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
      <Button
        icon={'plus'}
        style={styles.addRoomButton}
        onPress={onPressAddRoom}>
        <StyledText>{strings.addRoom}</StyledText>
      </Button>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={rooms}
        renderItem={renderRooms}
      />
    </SceneContainer>
  )
}
