import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import Placeholder from 'src/assets/images/item-placeholder.png'
import { StyledText } from 'src/components/StyledText'
import { AppTypography } from 'src/styles/types'
interface MyceliumCardProps {
  title: string
  subtitle: string
  onPress?: () => void
}

export const MyceliumCard: React.FC<MyceliumCardProps> = ({
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
            <StyledText style={styles.title} typography={AppTypography.H1}>
              {title}
            </StyledText>
            <StyledText style={styles.subtitle} numberOfLines={2}>
              {subtitle}
            </StyledText>
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
  },
  title: {},
})
