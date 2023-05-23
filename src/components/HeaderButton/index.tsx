import React from 'react'
import { TouchableOpacity } from 'react-native'

import { LayoutProps } from './types'

export const HeaderButton: React.FunctionComponent<LayoutProps> = ({
  onPress,
  children,
  style,
}) => (
  <TouchableOpacity
    style={style}
    onPress={onPress}
    hitSlop={{ bottom: 15, left: 15, right: 15, top: 15 }}>
    {children}
  </TouchableOpacity>
)
