import React, { useEffect } from 'react'
import { Pressable, StyleProp, ViewStyle } from 'react-native'
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import Svg, { Path } from 'react-native-svg'
import { Palette } from 'src/styles/Palette'
import { ColorPalette } from 'src/styles/types'

type CustomViewProps = {
  borderColor?: ColorPalette
  checkedColor?: ColorPalette
  style?: StyleProp<ViewStyle>
  checked: boolean
  onPress: () => void
}

const AnimatedPath = Animated.createAnimatedComponent(Path)

export const StyledCheckbox: React.FC<CustomViewProps> = ({
  checkedColor,
  borderColor,
  checked,
  onPress,
  style,
}) => {
  const themedCheckedColor = checkedColor
    ? Palette[checkedColor]
    : Palette.INFO_30

  const themedBorderColor = borderColor ? Palette[borderColor] : Palette.INFO_70

  const pathLength = 24

  const progress = useSharedValue(checked ? pathLength : 0)

  const animatedProps = useAnimatedProps(() => {
    return {
      stroke: themedCheckedColor,
      strokeDasharray: pathLength,
      strokeDashoffset: withTiming(checked ? 0 : pathLength),
      strokeOpacity: withTiming(checked ? 1 : 0),
      strokeWidth: 2,
    }
  }, [checked])

  // Update the progress when the checked prop changes
  useEffect(() => {
    progress.value = withTiming(checked ? 0 : pathLength, {
      duration: 250,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked])

  return (
    <Pressable onPress={onPress} hitSlop={10} style={style}>
      <Svg width={18} height={18}>
        <Path
          d="M2 2L16 2V16H2L2 2ZM0 2C0 0.89543 0.895431 0 2 0H16C17.1046 0 18 0.895431 18 2V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V2Z"
          fill={themedBorderColor}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <AnimatedPath
          d="M4 9L7 12L14 5"
          fill="none"
          animatedProps={animatedProps}
        />
      </Svg>
    </Pressable>
  )
}
