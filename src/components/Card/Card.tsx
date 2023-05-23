import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { StyledText } from 'src/components/StyledText'

interface CardProps {
  content: string
  onPress?: () => void
}

export const Card: React.FC<CardProps> = ({ content, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.cardContainer}>
      {({ pressed }) => (
        <View style={[styles.card, pressed && styles.pressedBackground]}>
          <StyledText style={styles.content}>{content}</StyledText>
        </View>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    height: 140,
    justifyContent: 'center',
    paddingHorizontal: 70,
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
