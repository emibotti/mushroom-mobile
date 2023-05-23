import React from 'react'
import { StyleProp, TextProps, TextStyle } from 'react-native'
import ParsedText, { ParsedTextProps } from 'react-native-parsed-text'
import { MAX_FONT_MULTIPLIER } from 'src/common/accessibility/fontEnlargement'
import { Palette } from 'src/styles/Palette'
import { AppTypography, ColorPalette } from 'src/styles/types'
import { Typography } from 'src/styles/Typography'

import { buildTextParsing } from './parsing'

export type TextCustomProps = {
  typography?: AppTypography
  color?: ColorPalette
  children: React.ReactNode
} & TextProps &
  ParsedTextProps

export const StyledText: React.FC<TextCustomProps> = props => {
  const {
    color = ColorPalette.SURFACE_90,
    children,
    typography = AppTypography.BODY_MEDIUM,
    style,
    maxFontSizeMultiplier,
  } = props
  const themedColor = color ? Palette[color] : Palette.SURFACE_90

  const themedTypography = Typography[typography]
  const mergedStyle: StyleProp<TextStyle> = {
    color: themedColor,
    ...themedTypography,
  }

  const parse = buildTextParsing()

  return (
    <ParsedText
      {...props}
      style={[mergedStyle, style]}
      accessible={true}
      parse={parse}
      maxFontSizeMultiplier={maxFontSizeMultiplier ?? MAX_FONT_MULTIPLIER}>
      {children}
    </ParsedText>
  )
}
