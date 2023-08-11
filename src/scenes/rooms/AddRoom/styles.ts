import { StyleSheet } from 'react-native'
import { Palette } from 'src/styles/Palette'

export const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  flexible: {
    backgroundColor: Palette.SURFACE_10,
    flex: 1,
  },
  subtitle: {
    marginBottom: 10,
  },
  textInputsContainer: {
    justifyContent: 'center',
  },
})
