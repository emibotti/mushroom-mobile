import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { generalStyles } from 'src/styles/generalStyles'
import { Palette } from 'src/styles/Palette'

export const LoadingActivityIndicator = () => (
  <View style={generalStyles.center}>
    <ActivityIndicator color={Palette.INFO_50} />
  </View>
)
