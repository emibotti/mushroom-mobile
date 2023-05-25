import { Dimensions, StyleSheet } from 'react-native'
import { Palette } from 'src/styles/Palette'

const screenHeight = Dimensions.get('screen').height

export const styles = StyleSheet.create({
  centeredContent: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  container: {
    flex: 1,
  },
  exampleItem: {
    padding: 30,
  },
  headerTitle: {
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
  },
  screen: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    top: screenHeight * 0.4,
  },

  stage: {
    color: Palette.SURFACE_10,
  },
  stageTag: {
    alignItems: 'center',
    backgroundColor: Palette.INFO_50,
    borderRadius: 20,
    marginVertical: 5,
    padding: 5,
  },
})
