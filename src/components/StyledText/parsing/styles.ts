import { StyleSheet } from 'react-native'
import { Palette } from 'src/styles/Palette'

export const styles = StyleSheet.create({
  backdrop: {
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    zIndex: 1,
  },
  bold: {
    fontWeight: '700',
  },
  card: {
    backgroundColor: Palette.PRIMARY_10,
    fontWeight: '700',
  },
  hyperLink: {
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  linkButton: {
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  listContainer: {
    paddingVertical: 10,
  },
  placeholder: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  underline: {
    color: '#2A94F4',
    textDecorationLine: 'underline',
  },
  url: {
    textDecorationLine: 'underline',
  },
})
