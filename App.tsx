import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as ReduxProvider } from 'react-redux'
import { navigationRef } from 'src/common/navigation'
import { AppContainer } from 'src/navigation'
import { linking } from 'src/navigation/routes'
import { store } from 'src/store'
import { generalStyles } from 'src/styles/generalStyles'

const App = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <NavigationContainer ref={navigationRef} linking={linking}>
          <GestureHandlerRootView style={generalStyles.flexible}>
            <AppContainer />
          </GestureHandlerRootView>
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaProvider>
  )
}

export default App
