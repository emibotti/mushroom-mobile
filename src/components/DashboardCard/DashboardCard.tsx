import React from 'react'
import { StyleSheet, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { Palette } from 'src/styles/Palette'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { StyledText } from '../StyledText'

interface DashboardCardProps {
  title: string
  count: number
  iconName: string
  iconColor?: string
  selected?: boolean
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  count,
  iconName,
  iconColor,
  selected,
}) => {
  const selectedItem = useAnimatedStyle(() => {
    return {
      borderBottomWidth: withTiming(selected ? 2 : 0, {
        duration: 200,
      }),
      borderColor: Palette.SURFACE_70,
    }
  }, [selected])

  return (
    <Animated.View style={[styles.card, selectedItem]}>
      <StyledText
        style={styles.title}
        color={ColorPalette.SURFACE_90}
        typography={AppTypography.BODY_MEDIUM_BOLD}>
        {title}
      </StyledText>
      <View style={styles.content}>
        <IconButton
          icon={iconName}
          size={30}
          iconColor={iconColor}
          containerColor={Palette.SURFACE_30}
        />
        <StyledText
          style={styles.count}
          color={ColorPalette.SURFACE_90}
          typography={AppTypography.H1}>
          {count}
        </StyledText>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    margin: 10,
    padding: 20,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  count: {
    marginLeft: 10,
  },
  title: {
    marginBottom: 10,
    marginLeft: 10,
  },
})
