import React from 'react'
import Animated from 'react-native-reanimated'
import { useHandleCrossFade } from 'src/hooks/useHandleCrossFade'
import { useHandleSession } from 'src/hooks/useHandleSession'

import { Routes } from './routes'
import { AuthenticatedStack } from './stacks/AuthenticatedStack'
import { UnauthenticatedStack } from './stacks/UnauthenticatedStack'

export const AppContainer = () => {
  // TODO: Emulate loading
  const loading = false
  // TODO: Change when networking is added
  const { activeSession } = useHandleSession()

  // TODO: Add splash?
  const { stacksStyle } = useHandleCrossFade(loading)

  // TODO: Check organization id to send the user to SelectOrganization screen or Home
  const initialRoute = Routes.Home

  return (
    <>
      <Animated.View style={stacksStyle}>
        {activeSession ? (
          <AuthenticatedStack initialRoute={initialRoute} />
        ) : (
          <UnauthenticatedStack />
        )}
      </Animated.View>
    </>
  )
}
