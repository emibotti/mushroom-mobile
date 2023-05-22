import React from 'react'
import { Home } from 'src/scenes/home'
import { Mycelium } from 'src/scenes/mycelium/Mycelium'
import { Room } from 'src/scenes/room/Room'
import { Rooms } from 'src/scenes/rooms/Rooms'

import { Routes } from './routes'
import { Stack } from './types'

export const AppContainer = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Home} component={Home} />
    <Stack.Screen name={Routes.Mycelium} component={Mycelium} />
    <Stack.Screen name={Routes.Rooms} component={Rooms} />
    <Stack.Screen name={Routes.Room} component={Room} />
  </Stack.Navigator>
)
