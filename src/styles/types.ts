export enum AppTypography {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  BODY_LARGE = 'BODY_LARGE',
  BODY_MEDIUM = 'BODY_MEDIUM',
  BODY_MEDIUM_BOLD = 'BODY_MEDIUM_BOLD',
  LABEL_LARGE = 'LABEL_LARGE',
  LABEL_MEDIUM = 'LABEL_MEDIUM',
  LABEL_SMALL = 'LABEL_SMALL',
  CAPTION_DEFAULT = 'CAPTION_DEFAULT',
  CAPTION_SMALL = 'CAPTION_SMALL',
  BUTTON_LARGE = 'BUTTON_LARGE',
  BUTTON_MEDIUM = 'BUTTON_MEDIUM',
  BODY_LARGE_BOLD = 'BODY_LARGE_BOLD',
  BODY_EXTRA_LARGE = 'BODY_EXTRA_LARGE',
}

export interface TypographyStyle<T> {
  [AppTypography.H1]: T
  [AppTypography.H2]: T
  [AppTypography.H3]: T
  [AppTypography.H4]: T
  [AppTypography.H5]: T
  [AppTypography.BODY_LARGE]: T
  [AppTypography.BODY_MEDIUM]: T
  [AppTypography.BODY_MEDIUM_BOLD]: T
  [AppTypography.LABEL_LARGE]: T
  [AppTypography.LABEL_MEDIUM]: T
  [AppTypography.LABEL_SMALL]: T
  [AppTypography.CAPTION_DEFAULT]: T
  [AppTypography.CAPTION_SMALL]: T
  [AppTypography.BUTTON_LARGE]: T
  [AppTypography.BUTTON_MEDIUM]: T
  [AppTypography.BODY_LARGE_BOLD]: T
  [AppTypography.BODY_EXTRA_LARGE]: T
}

export enum ColorPalette {
  'OVERLAY_CONNECT' = 'OVERLAY_CONNECT',
  'OVERLAY_ACCOMPLISH' = 'OVERLAY_ACCOMPLISH',
  'OVERLAY_LEARN' = 'OVERLAY_LEARN',
  'OVERLAY_PROFILE' = 'OVERLAY_PROFILE',
  'PRIMARY_90' = 'PRIMARY_90',
  'PRIMARY_70' = 'PRIMARY_70',
  'PRIMARY_50' = 'PRIMARY_50',
  'PRIMARY_30' = 'PRIMARY_30',
  'PRIMARY_20' = 'PRIMARY_20',
  'PRIMARY_10' = 'PRIMARY_10',
  'SECONDARY_90' = 'SECONDARY_90',
  'SECONDARY_70' = 'SECONDARY_70',
  'SECONDARY_50' = 'SECONDARY_50',
  'SECONDARY_30' = 'SECONDARY_30',
  'SECONDARY_10' = 'SECONDARY_10',
  'COMPLIMENTARY_90' = 'COMPLIMENTARY_90',
  'COMPLIMENTARY_70' = 'COMPLIMENTARY_70',
  'COMPLIMENTARY_50' = 'COMPLIMENTARY_50',
  'COMPLIMENTARY_30' = 'COMPLIMENTARY_30',
  'COMPLIMENTARY_10' = 'COMPLIMENTARY_10',
  'SUCCESS_90' = 'SUCCESS_90',
  'SUCCESS_70' = 'SUCCESS_70',
  'SUCCESS_50' = 'SUCCESS_50',
  'SUCCESS_30' = 'SUCCESS_30',
  'SUCCESS_10' = 'SUCCESS_10',
  'INFO_90' = 'INFO_90',
  'INFO_70' = 'INFO_70',
  'INFO_50' = 'INFO_50',
  'INFO_30' = 'INFO_30',
  'INFO_10' = 'INFO_10',
  'ERROR_90' = 'ERROR_90',
  'ERROR_70' = 'ERROR_70',
  'ERROR_50' = 'ERROR_50',
  'ERROR_30' = 'ERROR_30',
  'ERROR_10' = 'ERROR_10',
  'SURFACE_90' = 'SURFACE_90',
  'SURFACE_70' = 'SURFACE_70',
  'SURFACE_50' = 'SURFACE_50',
  'SURFACE_30' = 'SURFACE_30',
  'SURFACE_10' = 'SURFACE_10',
  'BUTTON_GRADIENT_PRIMARY_1' = 'BUTTON_GRADIENT_PRIMARY_1',
  'BUTTON_GRADIENT_PRIMARY_2' = 'BUTTON_GRADIENT_PRIMARY_2',
  'BUTTON_GRADIENT_INFO_1' = 'BUTTON_GRADIENT_INFO_1',
  'BUTTON_GRADIENT_INFO_2' = 'BUTTON_GRADIENT_INFO_2',
  'TRANSPARENT' = 'TRANSPARENT',
  'IOS_BUTTON' = 'IOS_BUTTON',
}

export interface PaletteStyle<T> {
  [ColorPalette.OVERLAY_LEARN]: T
  [ColorPalette.OVERLAY_ACCOMPLISH]: T
  [ColorPalette.OVERLAY_CONNECT]: T
  [ColorPalette.OVERLAY_PROFILE]: T
  [ColorPalette.PRIMARY_90]: T
  [ColorPalette.PRIMARY_70]: T
  [ColorPalette.PRIMARY_50]: T
  [ColorPalette.PRIMARY_30]: T
  [ColorPalette.PRIMARY_20]: T
  [ColorPalette.PRIMARY_10]: T
  [ColorPalette.SECONDARY_90]: T
  [ColorPalette.SECONDARY_70]: T
  [ColorPalette.SECONDARY_50]: T
  [ColorPalette.SECONDARY_30]: T
  [ColorPalette.SECONDARY_10]: T
  [ColorPalette.COMPLIMENTARY_90]: T
  [ColorPalette.COMPLIMENTARY_70]: T
  [ColorPalette.COMPLIMENTARY_50]: T
  [ColorPalette.COMPLIMENTARY_30]: T
  [ColorPalette.COMPLIMENTARY_10]: T
  [ColorPalette.SUCCESS_90]: T
  [ColorPalette.SUCCESS_70]: T
  [ColorPalette.SUCCESS_50]: T
  [ColorPalette.SUCCESS_30]: T
  [ColorPalette.SUCCESS_10]: T
  [ColorPalette.INFO_90]: T
  [ColorPalette.INFO_70]: T
  [ColorPalette.INFO_50]: T
  [ColorPalette.INFO_30]: T
  [ColorPalette.INFO_10]: T
  [ColorPalette.ERROR_90]: T
  [ColorPalette.ERROR_70]: T
  [ColorPalette.ERROR_50]: T
  [ColorPalette.ERROR_30]: T
  [ColorPalette.ERROR_10]: T
  [ColorPalette.SURFACE_90]: T
  [ColorPalette.SURFACE_70]: T
  [ColorPalette.SURFACE_50]: T
  [ColorPalette.SURFACE_30]: T
  [ColorPalette.SURFACE_10]: T
  [ColorPalette.BUTTON_GRADIENT_PRIMARY_1]: T
  [ColorPalette.BUTTON_GRADIENT_PRIMARY_2]: T
  [ColorPalette.BUTTON_GRADIENT_INFO_1]: T
  [ColorPalette.BUTTON_GRADIENT_INFO_2]: T
  [ColorPalette.TRANSPARENT]: T
  [ColorPalette.IOS_BUTTON]: T
}

export enum SpacingScale {
  HORIZONTAL_SCREEN_PADDING = 'HORIZONTAL_SCREEN_PADDING',
}

export interface SpacingStyle<T> {
  [SpacingScale.HORIZONTAL_SCREEN_PADDING]: T
}
