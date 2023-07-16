import React from 'react'
import { Pressable, StyleProp, View, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { StyledText } from 'src/components/StyledText'
import { Palette } from 'src/styles/Palette'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { styles } from './styles'
import {
  ButtonMode,
  ButtonSize,
  ButtonSizeSettings,
  LayoutProps,
} from './types'

export { ButtonMode, ButtonSize }

interface ButtonStyles {
  gradientColors?: string[]
  backgroundColor: string
  textColor: string
  disabledBackgroundColor: string
  disabledTextColor: string
  pressedColor: string
  pressedTextColor?: string
  borderColor?: string
  disabledBorderColor?: string
  underlined?: boolean
}

const buttonSelector = (mode: ButtonMode): ButtonStyles => {
  switch (mode) {
    case ButtonMode.PRIMARY_GRADIENT:
      return {
        backgroundColor: Palette.TRANSPARENT,
        disabledBackgroundColor: Palette.SURFACE_30,
        disabledTextColor: Palette.SURFACE_50,
        gradientColors: [
          Palette.BUTTON_GRADIENT_INFO_1,
          Palette.BUTTON_GRADIENT_INFO_2,
        ],
        pressedColor: Palette.SECONDARY_70,
        textColor: Palette.SURFACE_10,
      }
    case ButtonMode.INFO_GRADIENT:
      return {
        backgroundColor: Palette.TRANSPARENT,
        disabledBackgroundColor: Palette.SURFACE_30,
        disabledTextColor: Palette.SURFACE_50,
        gradientColors: [
          Palette.BUTTON_GRADIENT_INFO_1,
          Palette.BUTTON_GRADIENT_INFO_2,
        ],
        pressedColor: Palette.SECONDARY_70,
        textColor: Palette.SURFACE_10,
      }
    case ButtonMode.PRIMARY_OUTLINE:
      return {
        backgroundColor: Palette.TRANSPARENT,
        borderColor: Palette.INFO_50,
        disabledBackgroundColor: Palette.TRANSPARENT,
        disabledBorderColor: Palette.SURFACE_50,
        disabledTextColor: Palette.SURFACE_50,
        pressedColor: Palette.PRIMARY_10,
        textColor: Palette.INFO_50,
      }
    case ButtonMode.PRIMARY_SOLID:
      return {
        backgroundColor: Palette.INFO_50,
        disabledBackgroundColor: Palette.SURFACE_30,
        disabledTextColor: Palette.SURFACE_50,
        pressedColor: Palette.INFO_70,
        textColor: Palette.SURFACE_10,
      }
    case ButtonMode.ERROR_SOLID:
      return {
        backgroundColor: Palette.ERROR_50,
        disabledBackgroundColor: Palette.SURFACE_30,
        disabledTextColor: Palette.SURFACE_50,
        pressedColor: Palette.ERROR_70,
        textColor: Palette.SURFACE_10,
      }
    case ButtonMode.SECONDARY:
      return {
        backgroundColor: Palette.SECONDARY_50,
        disabledBackgroundColor: Palette.SURFACE_30,
        disabledTextColor: Palette.SURFACE_50,
        pressedColor: Palette.SECONDARY_30,
        textColor: Palette.SURFACE_10,
      }
    case ButtonMode.SECONDARY_OUTLINE:
      return {
        backgroundColor: Palette.TRANSPARENT,
        borderColor: Palette.INFO_50,
        disabledBackgroundColor: Palette.TRANSPARENT,
        disabledBorderColor: Palette.SURFACE_50,
        disabledTextColor: Palette.SURFACE_50,
        pressedColor: Palette.INFO_10,
        textColor: Palette.INFO_50,
      }
    case ButtonMode.LINK:
      return {
        backgroundColor: Palette.TRANSPARENT,
        disabledBackgroundColor: Palette.TRANSPARENT,
        disabledTextColor: Palette.INFO_70,
        pressedColor: Palette.TRANSPARENT,
        pressedTextColor: Palette.INFO_30,
        textColor: Palette.INFO_50,
        underlined: true,
      }
  }
}

export const buttonSizeCalculation = (size: ButtonSize): ButtonSizeSettings => {
  switch (size) {
    case ButtonSize.LARGE:
      return {
        height: 54,
        typography: AppTypography.BUTTON_LARGE,
      }
    case ButtonSize.MEDIUM:
      return {
        height: 48,
        typography: AppTypography.BUTTON_LARGE,
      }
    case ButtonSize.SMALL:
      return {
        height: 30,
        typography: AppTypography.BUTTON_MEDIUM,
      }
  }
}

export const Button: React.FC<LayoutProps> = ({
  title,
  onPress,
  children,
  disabled = false,
  style,
  mode = ButtonMode.PRIMARY_GRADIENT,
  size = ButtonSize.LARGE,
  onPressDisabled,
  ...props
}) => {
  const buttonStyles = buttonSelector(mode)
  const buttonSize = buttonSizeCalculation(size)

  const renderTouchable = () => (
    <Pressable
      {...props}
      onPress={disabled ? onPressDisabled : onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: disabled
            ? buttonStyles.disabledBackgroundColor
            : pressed
            ? buttonStyles.pressedColor
            : buttonStyles.backgroundColor,
          borderColor: disabled
            ? buttonStyles.disabledBorderColor
            : buttonStyles.borderColor,
          borderWidth: buttonStyles.borderColor ? 1 : 0,
          height: buttonSize.height,
        },
      ]}
      disabled={onPressDisabled ? false : disabled}>
      {({ pressed }) => (
        <>
          {children}
          <StyledText
            typography={buttonSize.typography}
            allowFontScaling={false}
            style={[
              styles.buttonText,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                color: disabled
                  ? (buttonStyles.disabledTextColor as ColorPalette)
                  : pressed && buttonStyles.pressedTextColor
                  ? (buttonStyles.pressedTextColor as ColorPalette)
                  : (buttonStyles.textColor as ColorPalette),
                textDecorationLine: buttonStyles.underlined
                  ? 'underline'
                  : 'none',
              },
            ]}>
            {title}
          </StyledText>
        </>
      )}
    </Pressable>
  )
  return (
    <View
      style={[
        styles.container,
        { height: buttonSize.height },
        style as StyleProp<ViewStyle>,
      ]}>
      {buttonStyles.gradientColors && !disabled ? (
        <LinearGradient
          colors={buttonStyles.gradientColors}
          style={[styles.button]}>
          {renderTouchable()}
        </LinearGradient>
      ) : (
        renderTouchable()
      )}
    </View>
  )
}
