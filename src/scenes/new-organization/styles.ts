import { Dimensions, StyleSheet } from 'react-native'
import { Palette } from 'src/styles/Palette'

const { height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 28,
    height: 50,
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  center: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: Palette.SURFACE_10,
    flex: 1,
  },
  flexible: {
    flex: 1,
  },
  linkButton: {
    marginTop: 10,
  },
  screenBackground: {
    bottom: 0,
    height,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  textInputsContainer: {
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
})
