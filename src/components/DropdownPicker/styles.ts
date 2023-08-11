import { StyleSheet } from 'react-native'
import { Palette } from 'src/styles/Palette'

export const styles = StyleSheet.create({
  disabledStyle: {
    backgroundColor: Palette.SURFACE_30,
  },
  dropdown: {
    borderColor: Palette.SURFACE_70,
    borderRadius: 5,
    marginBottom: 10,
  },
  outsideLabel: {
    marginBottom: 5,
    marginTop: 10,
  },
})
