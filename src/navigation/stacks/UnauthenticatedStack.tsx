import React from 'react'
import { Stack } from 'src/navigation/types'
import { Login } from 'src/scenes/login'

import { Routes } from '../routes'

export const UnauthenticatedStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Login} component={Login} />
  </Stack.Navigator>
)
