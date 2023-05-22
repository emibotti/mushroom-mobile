import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import React, { useLayoutEffect } from 'react'
import { FlatList, ListRenderItem, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { Header } from 'src/components/Header'
import { MyceliumCard } from 'src/components/MyceliumCard'
import { SceneContainer } from 'src/components/sceneContainer'
import { Routes } from 'src/navigation/routes'
import { RouteProp, SceneProps } from 'src/navigation/types'

import { strings } from './strings'
import { styles } from './styles'

enum Stage {
  Culture = 'culture',
  Spawn = 'spawn',
  Bulk = 'bulk',
  Fruit = 'fruit',
}

interface Mycelium {
  nombre: string
  id: string
  stage: Stage
  strain: string
}

const mockedBackendResponse: Mycelium[] = [
  {
    id: '1',
    nombre: 'Cult-001',
    stage: Stage.Culture,
    strain: 'Pleorotus Ostreatus',
  },
  {
    id: '2',
    nombre: 'Fruit-001',
    stage: Stage.Fruit,
    strain: 'Pleorotus Ostreatus',
  },
  { id: '3', nombre: 'Fruit-002', stage: Stage.Fruit, strain: 'Shiitake' },
]

const renderMyceliums: ListRenderItem<Mycelium> = ({ item }) => (
  <MyceliumCard key={item.id} title={item.nombre} subtitle={item.strain} />
)

const buildHeader = (props: NativeStackHeaderProps) => (
  <Header
    title={
      (props.route as RouteProp<Routes.Room>).params.name ??
      strings.roomHeaderTitle
    }
    onPress={props.navigation.goBack}
  />
)

export const Room: SceneProps<Routes.Room> = ({ navigation }) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      header: buildHeader,
      headerTransparent: true,
    }
    navigation.setOptions(options)
  }, [navigation])

  const onPressAddMycelium = () => navigation.navigate(Routes.Home)

  return (
    <SceneContainer style={styles.container}>
      <Button
        icon={'plus'}
        style={styles.agregarMicelioButton}
        onPress={onPressAddMycelium}>
        <Text>{strings.addMycelium}</Text>
      </Button>
      <FlatList data={mockedBackendResponse} renderItem={renderMyceliums} />
    </SceneContainer>
  )
}
