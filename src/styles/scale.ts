import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'

export const normalizedHeight = (height: number) => heightPercentageToDP(height)

export const normalizedWidth = (width: number) => widthPercentageToDP(width)

export const normalizedFontSize = (fontSize: number) =>
  heightPercentageToDP(fontSize)

export const normalizedDimensions = (
  height: number,
  width: number,
  scale = 1,
) => {
  const apectRatio = height / width
  return {
    height: normalizedWidth(width) * apectRatio * scale,
    width: normalizedWidth(width) * scale,
  }
}
