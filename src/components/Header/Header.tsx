import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

interface HeaderProps {
  title: string
  onPress?: () => void
}

export const Header: React.FC<HeaderProps> = ({ title, onPress }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {onPress && (
          <IconButton
            size={30}
            icon="keyboard-backspace"
            mode="contained"
            iconColor="black"
            containerColor="white"
            style={styles.backButton}
            onPress={onPress}
          />
        )}
        <Text style={[styles.title, !onPress && styles.titleWithoutArrow]}>
          {title}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backButton: {
    marginBottom: 20,
    marginLeft: 0,
  },
  container: {
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 32,
  },
  titleWithoutArrow: {
    marginTop: 20,
  },
})
