import { StyleSheet } from 'react-native'
import { Palette } from 'src/styles/Palette'

export const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  container: {
    backgroundColor: Palette.SURFACE_10,
    flex: 1,
  },
  continueButton: {
    marginTop: 10,
  },
  emailMessage: {
    marginTop: 60,
  },
  flexible: {
    backgroundColor: Palette.SURFACE_10,
    flex: 1,
  },
  generatedMyceliaContainer: {
    alignItems: 'flex-start',
  },
  subtitle: {
    marginBottom: 10,
  },
  textInputsContainer: {
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 80,
  },
})
