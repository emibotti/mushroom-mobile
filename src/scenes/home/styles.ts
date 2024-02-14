import { StyleSheet } from 'react-native'
import { normalizedHeight } from 'src/styles/scale'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dashboardCardsContainer: {
    flexDirection: 'row',
  },
  dashboardContainer: {
    marginTop: 10,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 10,
    paddingTop: 30,
  },
  headerLeft: {
    marginTop: 38,
  },
  headerRight: {
    marginTop: 40,
  },
  items: {
    paddingBottom: normalizedHeight(50),
    paddingTop: 10,
  },
  itemsContainer: {
    alignItems: 'center',
  },
})
