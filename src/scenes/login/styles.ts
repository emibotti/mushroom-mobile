import { Dimensions, StyleSheet } from 'react-native'
import { Palette } from 'src/styles/Palette'

const { height, width } = Dimensions.get('screen')

export const styles = StyleSheet.create({
  activityIndicator: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
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
  buttonForgot: {
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  center: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: Palette.SURFACE_10,
    flex: 1,
  },
  eyeContainer: {
    bottom: 57,
    position: 'absolute',
    right: 35,
  },
  flexible: {
    flex: 1,
  },
  heroImage: {
    width: width - 150,
  },
  logoBackground: {
    alignItems: 'center',
    borderRadius: 100,
    height: 380,
  },
  screenBackground: {
    bottom: 0,
    height,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  subtitle: {
    paddingTop: 10,
  },
  textInputsContainer: {
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
})
