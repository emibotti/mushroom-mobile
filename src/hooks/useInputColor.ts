import { useMemo } from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { Palette } from 'src/styles/Palette'

export interface InputTheme {
  focusedColor: string
  inputStyle: StyleProp<TextStyle>
  restingColor: string
  theme: { colors: { primary: string } }
  errorColor?: string
}

export const useInputColor = (validated?: boolean) => {
  const inputTheme: InputTheme = useMemo(
    () => ({
      errorColor: Palette.ERROR_50,
      focusedColor: Palette.INFO_50,
      inputStyle: {},
      restingColor: Palette.SURFACE_50,
      theme: {
        colors: {
          error: Palette.ERROR_50,
          placeholder: validated ? Palette.SUCCESS_50 : Palette.INFO_30,
          primary: validated ? Palette.SUCCESS_50 : Palette.INFO_30,
        },
      },
    }),
    [validated],
  )
  return {
    inputTheme,
  }
}
