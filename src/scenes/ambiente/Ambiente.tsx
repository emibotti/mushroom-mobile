import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import React, { useLayoutEffect } from 'react'
import { FlatList, ListRenderItem, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { Header } from 'src/components/Header'
import { MicelioCard } from 'src/components/MicelioCard'
import { SceneContainer } from 'src/components/sceneContainer'
import { Routes } from 'src/navigation/routes'
import { RouteProp, SceneProps } from 'src/navigation/types'

import { styles } from './styles'

enum Etapa {
  Culture = 'culture',
  Spawn = 'spawn',
  Bulk = 'bulk',
  Fruit = 'fruit',
}

interface Micelio {
  nombre: string
  id: string
  etapa: Etapa
  cepa: string
}

const mockedBackendResponse: Micelio[] = [
  {
    cepa: 'Pleorotus Ostreatus',
    etapa: Etapa.Culture,
    id: '1',
    nombre: 'Cult-001',
  },
  {
    cepa: 'Pleorotus Ostreatus',
    etapa: Etapa.Fruit,
    id: '2',
    nombre: 'Fruit-001',
  },
  { cepa: 'Shiitake', etapa: Etapa.Fruit, id: '3', nombre: 'Fruit-002' },
]

const renderMicelios: ListRenderItem<Micelio> = ({ item }) => (
  <MicelioCard key={item.id} title={item.nombre} subtitle={item.cepa} />
)

const buildHeader = (props: NativeStackHeaderProps) => (
  <Header
    title={
      (props.route as RouteProp<Routes.Ambiente>).params.nombre ?? 'Ambiente'
    }
    onPress={props.navigation.goBack}
  />
)

export const Ambiente: SceneProps<Routes.Ambiente> = ({ navigation }) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      header: buildHeader,
      headerTransparent: true,
    }
    navigation.setOptions(options)
  }, [navigation])

  const onPressAgregarMicelio = () => navigation.navigate(Routes.Home)

  return (
    <SceneContainer style={styles.container}>
      <Button
        icon={'plus'}
        style={styles.agregarMicelioButton}
        onPress={onPressAgregarMicelio}>
        <Text>Agregar Micelio</Text>
      </Button>
      <FlatList data={mockedBackendResponse} renderItem={renderMicelios} />
    </SceneContainer>
  )
}
