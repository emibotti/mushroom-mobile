import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { navigationRef } from 'src/common/navigation'
import { AppContainer } from 'src/navigation'
import { linking } from 'src/navigation/routes'

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} linking={linking}>
        <AppContainer />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
