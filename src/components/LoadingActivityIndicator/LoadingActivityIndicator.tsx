import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { generalStyles } from 'src/styles/generalStyles'

export const LoadingActivityIndicator = () => (
  <View style={generalStyles.center}>
    <ActivityIndicator />
  </View>
)
