import React from 'react'
import { StyleSheet, View } from 'react-native'
import { IconButton } from 'react-native-paper'

interface FabButton {
  onPress: () => void
  icon: string
}

interface FabMenuProps {
  fabs: FabButton[]
}

export const FabMenu: React.FC<FabMenuProps> = ({ fabs }) => {
  return (
    <View style={styles.container}>
      {fabs.map(fab => (
        <IconButton
          key={fab.icon}
          size={40}
          icon={fab.icon}
          onPress={fab.onPress}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 5,
    position: 'absolute',
  },
})
