import { StyleSheet } from 'react-native'
import { Palette } from 'src/styles/Palette'

export const styles = StyleSheet.create({
  addRoomButton: {
    marginBottom: 20,
  },
  container: {
    alignItems: 'center',
    backgroundColor: Palette.SURFACE_10,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 0,
    paddingHorizontal: 0,
  },
  noRoomsContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})
