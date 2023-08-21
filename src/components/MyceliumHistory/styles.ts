import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  authorName: {
    alignSelf: 'flex-end',
  },
  container: {
    paddingVertical: 10,
  },
  eventContainer: {
    paddingVertical: 10,
  },
  eventDate: {
    marginRight: 10,
  },
  eventItem: {
    marginRight: 10,
  },
  eventRow: {
    flexDirection: 'row',
  },
  historyNoteContainer: {
    marginRight: 10,
  },
  leftContent: {
    alignItems: 'flex-start',
    flex: 2,
    flexDirection: 'row',
  },
  leftContentCenter: {
    alignItems: 'center',
  },
  lineContainer: {
    alignItems: 'center',
  },
  lineSeparator: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 15,
    marginVertical: 3,
  },
  noHistory: {
    flex: 1,
    paddingVertical: 10,
  },
  rightContent: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  rightContentCenter: {
    justifyContent: 'center',
  },
  transitionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  transitionImage: {
    height: 32,
    width: 32,
  },
  transitionImageContainer: {
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: 'center',
    marginHorizontal: 12,
    padding: 8,
  },
  transitionNameButton: {
    width: 50,
  },
})
