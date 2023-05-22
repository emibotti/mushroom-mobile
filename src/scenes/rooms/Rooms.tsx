import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import React, { useLayoutEffect } from 'react'
import { FlatList, ListRenderItem, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { Card } from 'src/components/Card'
import { Header } from 'src/components/Header'
import { SceneContainer } from 'src/components/sceneContainer'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'

import { strings } from './strings'
import { styles } from './styles'

interface Room {
  name: string
  id: string
}

const mockedBackendResponse: Room[] = [
  { id: '1', name: 'Inoculación' },
  { id: '2', name: 'Incubación' },
  { id: '3', name: 'Fructificación' },
  { id: '4', name: 'Heladera' },
]

const buildHeader = (props: NativeStackHeaderProps) => (
  <Header title="Ambientes" onPress={props.navigation.goBack} />
)

export const Rooms: SceneProps<Routes.Rooms> = ({ navigation }) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      header: buildHeader,
      headerTransparent: true,
    }
    navigation.setOptions(options)
  }, [navigation])

  const onPressAddRoom = () => navigation.navigate(Routes.Home)
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
        style={styles.agregarAmbienteButton}
        onPress={onPressAddRoom}>
        <Text>{strings.addRoom}</Text>
      </Button>
      <FlatList data={mockedBackendResponse} renderItem={renderRooms} />
    </SceneContainer>
  )
}
