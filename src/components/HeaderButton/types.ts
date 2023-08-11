import { ReactNode } from 'react'
import { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native'

export interface LayoutProps extends TouchableOpacityProps {
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  children: ReactNode
}
