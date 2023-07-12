import React from 'react'
import { Routes, StackRoutes } from 'src/navigation/routes'
import { Stack } from 'src/navigation/types'
import { Home } from 'src/scenes/home'
import { Mycelium } from 'src/scenes/mycelium/Mycelium'
import { Room } from 'src/scenes/room/Room'
import { Rooms } from 'src/scenes/rooms/Rooms'

export const AuthenticatedStack: React.FC<{
  initialRoute?: StackRoutes | Routes
}> = ({ initialRoute }) => {
  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Rooms} component={Rooms} />
      <Stack.Screen name={Routes.Room} component={Room} />
      <Stack.Screen name={Routes.Mycelium} component={Mycelium} />
    </Stack.Navigator>
  )
}