import React from 'react'
import { Home } from 'src/scenes/home'
import { Micelio } from 'src/scenes/micelio/Micelio'

import { Routes } from './routes'
import { Stack } from './types'

export const AppContainer = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Home} component={Home} />
    <Stack.Screen name={Routes.Micelio} component={Micelio} />
  </Stack.Navigator>
)
