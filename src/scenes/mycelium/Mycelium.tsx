import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { SceneContainer } from 'src/components/sceneContainer'
import { Routes } from 'src/navigation/routes'
import { ParamList } from 'src/navigation/types'

import { styles } from './styles'

interface MyceliumProps {}

export const Mycelium: React.FC<MyceliumProps> = () => {
  const route: RouteProp<ParamList, Routes.Mycelium> = useRoute()
  const { id } = route.params

  return (
    <SceneContainer style={styles.container}>
      <View>
        <Text>{id ? `Micelio con id: ${id}` : 'Empty'}</Text>
      </View>
    </SceneContainer>
  )
}
