import React from 'react'
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native'
import { Palette } from 'src/styles/Palette'
import { Spacing } from 'src/styles/Spacing'
import { ColorPalette } from 'src/styles/types'

type CustomViewProps = {
  color?: ColorPalette
  children?: React.ReactNode
} & ViewProps

export const Container: React.FC<CustomViewProps> = props => {
  const { color, style, children } = props
  const themedColor = color ? Palette[color] : Palette.TRANSPARENT

  const defaultStyle: StyleProp<ViewStyle> = {
    backgroundColor: themedColor,
    paddingHorizontal: Spacing.HORIZONTAL_SCREEN_PADDING,
    paddingVertical: 10,
  }

  const mergedStyle: StyleProp<ViewStyle> = style
    ? style instanceof Array
      ? [defaultStyle, style]
      : { ...defaultStyle, ...(style as any) }
    : defaultStyle

  return (
    <View {...props} style={mergedStyle}>
      {children}
    </View>
  )
}
