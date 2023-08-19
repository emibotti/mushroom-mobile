import { TextStyle } from 'react-native'

import { AppTypography, TypographyStyle } from './types'

type TypographyTextStyles = Pick<
  TextStyle,
  'fontFamily' | 'fontSize' | 'fontStyle' | 'lineHeight' | 'fontWeight'
>

export const Typography: TypographyStyle<TypographyTextStyles> = {
  [AppTypography.H1]: {
    fontSize: 32,
    fontStyle: 'normal',
    lineHeight: 35,
  },
  [AppTypography.H2]: {
    fontSize: 24,
    fontStyle: 'normal',
  },
  [AppTypography.H3]: {
    fontSize: 16,
    fontStyle: 'normal',
  },
  [AppTypography.H4]: {
    fontSize: 14,
    fontStyle: 'normal',
  },
  [AppTypography.H5]: {
    fontSize: 20,
    fontStyle: 'normal',
    lineHeight: 25,
  },
  [AppTypography.BODY_EXTRA_LARGE]: {
    fontSize: 24,
    fontStyle: 'normal',
  },
  [AppTypography.BODY_LARGE]: {
    fontSize: 21,
    fontStyle: 'normal',
  },
  [AppTypography.BODY_MEDIUM]: {
    fontSize: 16,
    fontStyle: 'normal',
  },
  [AppTypography.BODY_MEDIUM_BOLD]: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  [AppTypography.BODY_LARGE_BOLD]: {
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 21,
  },
  [AppTypography.LABEL_LARGE]: {
    fontSize: 18,
    fontStyle: 'normal',
    lineHeight: 30,
  },
  [AppTypography.LABEL_MEDIUM]: {
    fontSize: 16,
    fontStyle: 'normal',
  },
  [AppTypography.LABEL_SMALL]: {
    fontSize: 14,
    fontStyle: 'normal',
  },
  [AppTypography.CAPTION_DEFAULT]: {
    fontSize: 12,
    fontStyle: 'normal',
    lineHeight: 18,
  },
  [AppTypography.CAPTION_SMALL]: {
    fontSize: 10,
    fontStyle: 'normal',
    lineHeight: 15,
  },
  [AppTypography.BUTTON_LARGE]: {
    fontSize: 18,
    fontStyle: 'normal',
  },
  [AppTypography.BUTTON_MEDIUM]: {
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 21,
  },
}
