import { StyleSheet } from 'react-native'
import { Palette } from 'src/styles/Palette'
import { Spacing } from 'src/styles/Spacing'
import { SpacingScale } from 'src/styles/types'

export const styles = StyleSheet.create({
  attributesContainer: {
    marginVertical: 20,
  },
  centeredContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  exampleItem: {
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  headerTitle: {
    paddingHorizontal: 5,
  },
  historyContainer: {
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  rowComponent: {
    paddingVertical: 10,
  },
  rowText: {
    marginRight: 10,
  },
  screen: {
    padding: Spacing[SpacingScale.HORIZONTAL_SCREEN_PADDING],
    paddingBottom: 300,
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
  strainDescription: {
    paddingVertical: 20,
  },
  strainDescriptionContainer: {
    marginVertical: 10,
  },
  textCenter: {
    textAlign: 'center',
  },
})
