import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import React, { useLayoutEffect } from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { Button } from 'react-native-paper'
import { Header } from 'src/components/Header'
import { MyceliumCard } from 'src/components/MyceliumCard'
import { SceneContainer } from 'src/components/sceneContainer'
import { StyledText } from 'src/components/StyledText'
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
  name: string
  id: string
  stage: Stage
  strain: string
}

const mockedBackendResponse: Mycelium[] = [
  {
    id: '1',
    name: 'Cult-001',
    stage: Stage.Culture,
    strain: 'Pleorotus Ostreatus',
  },
  {
    id: '2',
    name: 'Fruit-001',
    stage: Stage.Fruit,
    strain: 'Pleorotus Ostreatus',
  },
  { id: '3', name: 'Fruit-002', stage: Stage.Fruit, strain: 'Shiitake' },
]

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

  const renderMyceliums: ListRenderItem<Mycelium> = ({ item }) => (
    <MyceliumCard
      key={item.id}
      title={item.name}
      subtitle={item.strain}
      onPress={() => {
        navigation.navigate(Routes.Mycelium, {
          id: item.id,
          name: item.name,
        })
      }}
    />
  )

  const onPressAddMycelium = () => navigation.navigate(Routes.Home)

  return (
    <SceneContainer style={styles.container}>
      <Button
        icon={'plus'}
        style={styles.agregarMicelioButton}
        onPress={onPressAddMycelium}>
        <StyledText>{strings.addMycelium}</StyledText>
      </Button>
      <FlatList data={mockedBackendResponse} renderItem={renderMyceliums} />
    </SceneContainer>
  )
}
