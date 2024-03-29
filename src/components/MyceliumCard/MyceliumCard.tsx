import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { StyledText } from 'src/components/StyledText'
import { stageImagePlaceholder } from 'src/scenes/mycelium/Mycelium'
import { StageResponse } from 'src/store/APIs/mycellium/types'
import { Palette } from 'src/styles/Palette'
import { screenWidth } from 'src/styles/scale'
import { CARD_HORIZONTAL_MARGIN } from 'src/styles/Spacing'
import { AppTypography } from 'src/styles/types'
interface MyceliumCardProps {
  title: string
  stageType: string
  onPress?: () => void
}

export const MyceliumCard: React.FC<MyceliumCardProps> = ({
  title,
  stageType,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.cardContainer}>
      {({ pressed }) => (
        <View style={[styles.card, pressed && styles.pressedBackground]}>
          <View>
            <Image
              source={stageImagePlaceholder(stageType as StageResponse)}
              style={styles.image}
            />
          </View>
          <View style={styles.contentContainer}>
            <StyledText
              style={styles.title}
              numberOfLines={1}
              typography={AppTypography.H2}>
              {title}
            </StyledText>
            <StyledText style={styles.subtitle} numberOfLines={2}>
              {stageType}
            </StyledText>
          </View>
        </View>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Palette.SURFACE_10,
    borderColor: Palette.SURFACE_70,
    borderRadius: 30,
    borderWidth: 0.3,
    flexDirection: 'row',
    height: 150,
    padding: 25,
    width: screenWidth - CARD_HORIZONTAL_MARGIN,
  },
  cardContainer: {
    marginBottom: 15,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
    textAlign: 'left',
  },
  image: {
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    height: 100,
    width: 100,
  },
  pressedBackground: {
    backgroundColor: '#EEEEEE',
  },
  subtitle: {
    color: 'gray',
  },
  title: {},
})
