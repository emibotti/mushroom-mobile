import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface ButtonProps {
  title: string
  onPress: () => void
}

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007aff',
    borderRadius: 5,
    // blue color
    padding: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    // white color
    textAlign: 'center',
  },
})
