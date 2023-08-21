import React from 'react'
import { StyleSheet, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyledText } from 'src/components/StyledText'
import { Palette } from 'src/styles/Palette'

interface HeaderProps {
  title?: string
  onPress?: () => void
  rightElement?: React.ReactElement
  transparent?: boolean
}

export const Header: React.FC<HeaderProps> = ({
  title,
  onPress,
  rightElement,
  transparent = false,
}) => {
  return (
    <SafeAreaView style={!transparent && styles.safeAreaWithBackground}>
      <View style={styles.container}>
        <View style={styles.headerFirstRow}>
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
          <View style={styles.rightElement}>{rightElement}</View>
        </View>
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
    padding: 20,
    paddingBottom: 5,
  },
  headerFirstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightElement: {
    alignItems: 'flex-end',
    flex: 1,
  },
  safeAreaWithBackground: {
    backgroundColor: Palette.SURFACE_10,
  },
  title: {
    fontSize: 32,
  },
  titleWithoutArrow: {
    marginTop: 20,
  },
})
