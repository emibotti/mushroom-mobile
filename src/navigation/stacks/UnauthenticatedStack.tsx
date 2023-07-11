import React from 'react'
import { Stack } from 'src/navigation/types'
import { Login } from 'src/scenes/login'

import { Routes } from '../routes'

export const UnauthenticatedStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Login} component={Login} />
    {/* <Stack.Screen name={Routes.NeedsToUpdate} component={NeedsToUpdate} /> */}
    {/* <Stack.Screen
      name={Routes.NewForgottenPassword}
      component={NewForgottenPassword}
    /> */}
    {/* <Stack.Screen
      name={Routes.CreateAccount}
      component={CreateAccount}
      options={{ headerShown: false }}
    /> */}
    {/* <Stack.Screen name={Routes.ForgotPassword} component={ForgotPassword} /> */}
    {/* <Stack.Screen name={Routes.MagicLinkSignup} component={MagicLinkSignup} /> */}
  </Stack.Navigator>
)
