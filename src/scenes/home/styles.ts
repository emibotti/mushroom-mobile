import { StyleSheet } from 'react-native'
import { normalizedHeight } from 'src/styles/scale'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: normalizedHeight(14),
  },
  dashboardCardsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  dashboardContainer: {
    marginTop: 10,
  },
  headerLeft: {
    marginLeft: 15,
    marginTop: 20,
  },
  headerRight: {
    marginRight: 15,
    marginTop: 20,
  },
  itemsContainer: {
    alignItems: 'center',
  },
})
