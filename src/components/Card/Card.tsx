import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { StyledText } from 'src/components/StyledText'
import { Palette } from 'src/styles/Palette'
import { screenWidth } from 'src/styles/scale'
import { CARD_HORIZONTAL_MARGIN } from 'src/styles/Spacing'

interface CardProps {
  content: string
  onPress?: () => void
}

export const Card: React.FC<CardProps> = ({ content, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.cardContainer}>
      {({ pressed }) => (
        <View style={[styles.card, pressed && styles.pressedBackground]}>
          <StyledText numberOfLines={1} style={styles.content}>
            {content}
          </StyledText>
        </View>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: Palette.SURFACE_10,
    borderRadius: 30,
    borderWidth: 1,
    height: 140,
    justifyContent: 'center',
    paddingHorizontal: 70,
    width: screenWidth - CARD_HORIZONTAL_MARGIN,
  },
  cardContainer: {
    marginBottom: 15,
  },
  content: {
    fontSize: 20,
  },
  pressedBackground: {
    backgroundColor: '#EEEEEE',
  },
})
