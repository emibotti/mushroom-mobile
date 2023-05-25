import React from 'react'
import { Pressable, PressableProps, StyleSheet } from 'react-native'
import { StyledText } from 'src/components/StyledText'

interface ButtonProps {
  title: string
  onPress: () => void
}

export const Button: React.FC<ButtonProps & PressableProps> = ({
  title,
  onPress,
  ...props
}) => (
  <Pressable style={styles.button} onPress={onPress} {...props}>
    <StyledText style={styles.buttonText}>{title}</StyledText>
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
