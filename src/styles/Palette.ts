import { ColorPalette, PaletteStyle } from './types'

export const Palette: PaletteStyle<string> = {
  BUTTON_GRADIENT_INFO_1: '#3044AB',
  BUTTON_GRADIENT_INFO_2: '#263689',
  BUTTON_GRADIENT_PRIMARY_1: '#D1491F',
  BUTTON_GRADIENT_PRIMARY_2: '#BD3911',
  COMPLIMENTARY_10: '#F7F6F5',
  COMPLIMENTARY_30: '#FCEFCE',
  COMPLIMENTARY_50: '#EEAE0B',
  COMPLIMENTARY_70: '#DE8431',
  COMPLIMENTARY_90: '#8B1900',
  ERROR_10: '#F6D3D3',
  ERROR_30: '#E47C7C',
  ERROR_50: '#D22525',
  ERROR_70: '#A81E1E',
  ERROR_90: '#691212',
  INFO_10: '#D6DAEE',
  INFO_30: '#838FCD',
  INFO_50: '#3044AB',
  INFO_70: '#263689',
  INFO_90: '#182256',
  IOS_BUTTON: '#307BF6',
  OVERLAY_ACCOMPLISH: '#AF2E07D9',
  OVERLAY_CONNECT: '#DE8431CC',
  OVERLAY_LEARN: '#2D0554CC',
  OVERLAY_PROFILE: '#3044ABCC',
  PRIMARY_10: '#FCEBE6',
  PRIMARY_20: '#F6D3D3',
  PRIMARY_30: '#F5B5A1',
  PRIMARY_50: '#D1491F',
  PRIMARY_70: '#AF2E07',
  PRIMARY_90: '#6E1D04',
  SECONDARY_10: '#D5CDDD',
  SECONDARY_30: '#816998',
  SECONDARY_50: '#2D0554',
  SECONDARY_70: '#240443',
  SECONDARY_90: '#16022A',
  SUCCESS_10: '#DFEDE8',
  SUCCESS_30: '#76B888',
  SUCCESS_50: '#20A144',
  SUCCESS_70: '#166D2E',
  SUCCESS_90: '#0E441C',
  SURFACE_10: '#FFFFFF',
  SURFACE_30: '#E6E6E6',
  SURFACE_50: '#BFBFBF',
  SURFACE_70: '#474747',
  SURFACE_90: '#1E1B20',
  TRANSPARENT: 'transparent',
}

function checkOpacityValue(opacity: number) {
  if (opacity < 0 || opacity > 1) {
    throw new Error(`opacity must between 0 and 1, got ${opacity}`)
  }
}

export const colorTranslucent = (color: ColorPalette, opacity: number) => {
  const colorToOpaque = Palette[color]
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorToOpaque)
  if (!result) {
    throw new Error(`Error in opacity`)
  }
  return `rgba(${parseInt(result[1], 16)}, ${parseInt(
    result[2],
    16,
  )}, ${parseInt(result[3], 16)},  ${opacity})`
}

export function blackTranslucent(opacity: number) {
  checkOpacityValue(opacity)
  return `rgba(0, 0, 0, ${opacity})`
}
