import { StyleSheet } from 'react-native'

import { Palette } from './Palette'

export const generalStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
    backgroundColor: Palette.SURFACE_10,
    flex: 1,
    justifyContent: 'center',
  },
  flexible: {
    flex: 1,
  },
})
