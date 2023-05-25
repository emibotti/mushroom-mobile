import React from 'react'
import { StyleSheet, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyledText } from 'src/components/StyledText'
import { Palette } from 'src/styles/Palette'

interface HeaderProps {
  title?: string
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
        {title && (
          <StyledText
            style={[styles.title, !onPress && styles.titleWithoutArrow]}>
            {title}
          </StyledText>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backButton: {
    borderColor: Palette.SURFACE_90,
    borderWidth: 1,
    marginBottom: 20,
    marginLeft: 0,
  },
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
  },
  titleWithoutArrow: {
    marginTop: 20,
  },
})
