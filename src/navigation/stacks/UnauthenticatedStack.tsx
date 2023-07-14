import React from 'react'
import { Stack } from 'src/navigation/types'
import { Login } from 'src/scenes/login'
import { Register } from 'src/scenes/register'

import { Routes } from '../routes'

export const UnauthenticatedStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Login} component={Login} />
    <Stack.Screen name={Routes.Register} component={Register} />
  </Stack.Navigator>
)
