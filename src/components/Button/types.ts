import { PressableProps } from 'react-native'
import { AppTypography } from 'src/styles/types'

export enum ButtonMode {
  PRIMARY_GRADIENT = 'PRIMARY_GRADIENT',
  INFO_GRADIENT = 'INFO_GRADIENT',
  SECONDARY = 'SECONDARY',
  PRIMARY_OUTLINE = 'PRIMARY_OUTLINE',
  LINK = 'LINK',
  SECONDARY_OUTLINE = 'SECONDARY_OUTLINE',
  PRIMARY_SOLID = 'PRIMARY_SOLID',
  ERROR_SOLID = 'ERROR_SOLID',
}

export enum ButtonSize {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

interface ExtraProps {
  title: string
  mode?: ButtonMode
  size?: ButtonSize
  onPressDisabled?: () => void
}

export type LayoutProps = PressableProps & ExtraProps

export type ButtonSizeSettings = {
  height: number
  typography: AppTypography
}
