import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 83,
    borderStyle: 'solid',
    flex: 1,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
  },
  container: {
    height: 56,
  },
  flexible: {
    flex: 1,
  },
})

export const shadowStyles = (disabled: boolean) =>
  disabled
    ? {}
    : {
        elevation: 12,
        shadowOffset: {
          height: 6,
          width: 0,
        },
        shadowOpacity: 0.37,
        shadowRadius: 5.49,
      }
