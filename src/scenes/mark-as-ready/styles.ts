import { StyleSheet } from 'react-native'
import { Palette } from 'src/styles/Palette'

export const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  flexible: {
    backgroundColor: Palette.SURFACE_10,
    flex: 1,
  },
  notes: {
    height: 150,
  },
})
