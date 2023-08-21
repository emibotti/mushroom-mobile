import React from 'react'
import { Image, ImageSourcePropType, View } from 'react-native'
import { push } from 'src/common/navigation'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { StyledText } from 'src/components/StyledText'
import { Routes } from 'src/navigation/routes'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { styles } from './styles'

export interface MyceliumTransitionProps {
  left: string
  right: string
  imageSource: ImageSourcePropType
  myceliumId: string
}

export const MyceliumTransition: React.FC<MyceliumTransitionProps> = ({
  left,
  imageSource,
  right,
  myceliumId,
}) => (
  <View style={styles.transitionContainer}>
    <Button
      style={styles.transitionNameButton}
      mode={ButtonMode.LINK}
      title={left}
      onPress={() =>
        push(Routes.Mycelium, {
          id: myceliumId,
        })
      }
    />
    <View style={styles.transitionImageContainer}>
      <Image
        source={imageSource}
        style={styles.transitionImage}
        resizeMode="contain"
      />
    </View>
    <StyledText
      typography={AppTypography.LABEL_MEDIUM}
      color={ColorPalette.SURFACE_70}>
      {right}
    </StyledText>
  </View>
)
