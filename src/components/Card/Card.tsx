import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface CardProps {
  content: string
  onPress?: () => void
}

export const Card: React.FC<CardProps> = ({ content, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.cardContainer}>
      {({ pressed }) => (
        <View style={[styles.card, pressed && styles.pressedBackground]}>
          <Text style={styles.content}>{content}</Text>
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
