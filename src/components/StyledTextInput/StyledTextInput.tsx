import React from 'react'
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import { TextInput as PaperTextInput } from 'react-native-paper'
import { TextInputProps as TextInputPaperProps } from 'react-native-paper'
import { SharedValue } from 'react-native-reanimated'
import { MAX_FONT_MULTIPLIER } from 'src/common/accessibility/fontEnlargement'
import { StyledText } from 'src/components/StyledText'
import { useInputColor } from 'src/hooks/useInputColor'
import { Palette } from 'src/styles/Palette'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { styles } from './styles'

export interface StyledTextProps extends TextInputProps {
  label: TextInputPaperProps['label']
  disabled?: TextInputPaperProps['disabled']
  validValue?: boolean
  validated?: boolean
  required?: boolean
  isFocused?: SharedValue<boolean>
}

export const StyledTextInput: React.FunctionComponent<
  StyledTextProps
> = props => {
  const {
    validValue = true,
    style,
    disabled,
    validated = false,
    autoCorrect = false,
  } = props

  const { inputTheme } = useInputColor(validated)

  const renderError = (isError: boolean) => (isError ? <></> : <View />)

  const mergedStyle = style
    ? style instanceof Array
      ? [inputTheme.inputStyle].concat(style)
      : StyleSheet.flatten([inputTheme.inputStyle, style])
    : inputTheme.inputStyle

  const labelColor = disabled ? ColorPalette.SURFACE_50 : ColorPalette.INFO_50

  const labelToShow = props.required ? props.label + ' *' : props.label

  const onFocus: TextInputProps['onFocus'] = event => {
    if (props.isFocused !== undefined) {
      props.isFocused.value = true
    }
    if (props.onFocus) {
      props.onFocus(event)
    }
  }

  const onBlur: TextInputProps['onBlur'] = event => {
    if (props.isFocused !== undefined) {
      props.isFocused.value = false
    }
    if (props.onBlur) {
      props.onBlur(event)
    }
  }

  return (
    <View style={styles.container}>
      {props.label && (
        <StyledText color={labelColor} typography={AppTypography.BUTTON_MEDIUM}>
          {labelToShow}
        </StyledText>
      )}
      <PaperTextInput
        onPressIn={undefined}
        onPressOut={undefined}
        autoComplete={undefined}
        maxFontSizeMultiplier={MAX_FONT_MULTIPLIER}
        autoCorrect={autoCorrect}
        accessible={true}
        autoCapitalize={'none'}
        mode={'outlined'}
        returnKeyType={'done'}
        underlineColor={inputTheme.restingColor}
        error={!validValue}
        right={renderError(!validValue)}
        theme={inputTheme.theme}
        textContentType={'name'}
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        selectionColor={
          validValue ? inputTheme.focusedColor : inputTheme.errorColor
        }
        style={[mergedStyle, { backgroundColor: Palette.SURFACE_10 }]}
        label={undefined}
        children={undefined}
        render={renderProps => (
          <TextInput
            {...renderProps}
            style={[renderProps.style, styles.input]}
          />
        )}
      />
    </View>
  )
}
