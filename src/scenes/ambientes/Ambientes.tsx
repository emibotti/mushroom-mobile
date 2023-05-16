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

import { styles } from './styles'

interface Ambiente {
  nombre: string
  id: string
}

const mockedBackendResponse: Ambiente[] = [
  { id: '1', nombre: 'Inoculación' },
  { id: '2', nombre: 'Incubación' },
  { id: '3', nombre: 'Fructificación' },
  { id: '4', nombre: 'Heladera' },
]

const buildHeader = (props: NativeStackHeaderProps) => (
  <Header title="Ambientes" onPress={props.navigation.goBack} />
)

export const Ambientes: SceneProps<Routes.Ambientes> = ({ navigation }) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      header: buildHeader,
      headerTransparent: true,
    }
    navigation.setOptions(options)
  }, [navigation])

  const onPressAgregarAmbiente = () => navigation.navigate(Routes.Home)
  const onPressCard = (id: string, nombre: string) => () =>
    navigation.navigate(Routes.Ambiente, { id, nombre })

  const renderAmbientes: ListRenderItem<Ambiente> = ({ item }) => (
    <Card
      key={item.id}
      content={item.nombre}
      onPress={onPressCard(item.id, item.nombre)}
    />
  )

  return (
    <SceneContainer style={styles.container}>
      <Button
        icon={'plus'}
        style={styles.agregarAmbienteButton}
        onPress={onPressAgregarAmbiente}>
        <Text>Agregar Ambiente</Text>
      </Button>
      <FlatList data={mockedBackendResponse} renderItem={renderAmbientes} />
    </SceneContainer>
  )
}
