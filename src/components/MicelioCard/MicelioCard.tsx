import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Placeholder from 'src/assets/images/item-placeholder.png'

interface MicelioCardProps {
  title: string
  subtitle: string
  onPress?: () => void
}

export const MicelioCard: React.FC<MicelioCardProps> = ({
  title,
  subtitle,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.cardContainer}>
      {({ pressed }) => (
        <View style={[styles.card, pressed && styles.pressedBackground]}>
          <View>
            <Image source={Placeholder} />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle} numberOfLines={2}>
              {subtitle}
            </Text>
          </View>
        </View>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 30,
    borderWidth: 1,
    flexDirection: 'row',
    height: 150,
    padding: 25,
  },
  cardContainer: {
    marginBottom: 15,
  },
  contentContainer: {
    justifyContent: 'center',
    marginLeft: 10,
    textAlign: 'left',
  },
  pressedBackground: {
    backgroundColor: '#EEEEEE',
  },
  subtitle: {
    color: 'gray',
    fontSize: 18,
  },
  title: {
    fontSize: 20,
  },
})
