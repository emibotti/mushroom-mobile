import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { SceneContainer } from 'src/components/sceneContainer'
import { Routes } from 'src/navigation/routes'
import { ParamList } from 'src/navigation/types'

import { styles } from './styles'

interface MicelioProps {}

export const Micelio: React.FC<MicelioProps> = () => {
  const route: RouteProp<ParamList, Routes.Micelio> = useRoute()
  const { id } = route.params

  return (
    <SceneContainer style={styles.container}>
      <View>
        <Text>{id ? `Micelio con id: ${id}` : 'Empty'}</Text>
      </View>
    </SceneContainer>
  )
}
