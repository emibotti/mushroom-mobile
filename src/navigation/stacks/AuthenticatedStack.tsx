import React from 'react'
import { Routes, StackRoutes } from 'src/navigation/routes'
import { Stack } from 'src/navigation/types'
import { AddMycelium } from 'src/scenes/add-mycelium'
import { AddMyceliumSuccess } from 'src/scenes/add-mycelium/AddMyceliumSuccess'
import { Harvest } from 'src/scenes/harvest'
import { Home } from 'src/scenes/home'
import { Inspect } from 'src/scenes/inspect/Inspect'
import { Mycelium } from 'src/scenes/mycelium/Mycelium'
import { CreateOrganization } from 'src/scenes/new-organization/CreateOrganization'
import { JoinOrganization } from 'src/scenes/new-organization/JoinOrganization'
import { OrganizationCreated } from 'src/scenes/new-organization/OrganizationCreated'
import { Profile } from 'src/scenes/profile/Profile'
import { Room } from 'src/scenes/room/Room'
import { AddRoom } from 'src/scenes/rooms/AddRoom'
import { Rooms } from 'src/scenes/rooms/Rooms'

export const AuthenticatedStack: React.FC<{
  initialRoute?: StackRoutes | Routes
}> = ({ initialRoute }) => {
  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name={Routes.CreateOrganization}
        component={CreateOrganization}
      />
      <Stack.Screen
        name={Routes.JoinOrganization}
        component={JoinOrganization}
      />
      <Stack.Screen
        name={Routes.OrganizationCreated}
        component={OrganizationCreated}
      />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Rooms} component={Rooms} />
      <Stack.Screen name={Routes.Room} component={Room} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
      <Stack.Screen name={Routes.AddRoom} component={AddRoom} />
      <Stack.Screen name={Routes.AddMycelium} component={AddMycelium} />
      <Stack.Screen
        name={Routes.AddMyceliumSuccess}
        component={AddMyceliumSuccess}
      />
      <Stack.Screen
        name={Routes.Mycelium}
        component={Mycelium}
        options={{
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen name={Routes.Harvest} component={Harvest} />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
        }}>
        <Stack.Screen name={Routes.Inspect} component={Inspect} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
