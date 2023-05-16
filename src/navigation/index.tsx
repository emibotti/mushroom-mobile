import React from 'react'
import { Micelio } from 'src/scenes/micelio/Micelio'
import { Welcome } from 'src/scenes/welcome'

import { Routes } from './routes'
import { Stack } from './types'

export const AppContainer = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Home} component={Welcome} />
    <Stack.Screen name={Routes.Micelio} component={Micelio} />
  </Stack.Navigator>
)
