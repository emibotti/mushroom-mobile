import React from 'react'
import { Ambiente } from 'src/scenes/ambiente/Ambiente'
import { Ambientes } from 'src/scenes/ambientes/Ambientes'
import { Home } from 'src/scenes/home'
import { Micelio } from 'src/scenes/micelio/Micelio'

import { Routes } from './routes'
import { Stack } from './types'

export const AppContainer = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Home} component={Home} />
    <Stack.Screen name={Routes.Micelio} component={Micelio} />
    <Stack.Screen name={Routes.Ambientes} component={Ambientes} />
    <Stack.Screen name={Routes.Ambiente} component={Ambiente} />
  </Stack.Navigator>
)
