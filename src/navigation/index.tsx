import React from 'react'
import Animated from 'react-native-reanimated'
import { useHandleCrossFade } from 'src/hooks/useHandleCrossFade'
import { useHandleSession } from 'src/hooks/useHandleSession'
import { Palette } from 'src/styles/Palette'

import { Routes } from './routes'
import { AuthenticatedStack } from './stacks/AuthenticatedStack'
import { UnauthenticatedStack } from './stacks/UnauthenticatedStack'

export const AppContainer = () => {
  // TODO: Emulate loading
  const loading = false

  const { activeUser } = useHandleSession()

  // TODO: Add splash?
  const { stacksStyle } = useHandleCrossFade(loading)

  return (
    <>
      <Animated.View
        style={[stacksStyle, { backgroundColor: Palette.SURFACE_10 }]}>
        {activeUser ? (
          <AuthenticatedStack
            initialRoute={
              activeUser.hasOrganization
                ? Routes.Home
                : Routes.CreateOrganization
            }
          />
        ) : (
          <UnauthenticatedStack />
        )}
      </Animated.View>
    </>
  )
}
