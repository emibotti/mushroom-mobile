import React from 'react'
import Closable from 'src/assets/icons/closableHeader.svg'
import { Palette } from 'src/styles/Palette'

import { HeaderButton } from '../HeaderButton'
import { LayoutProps } from './types'

export const CloseButton: React.FC<LayoutProps> = ({
  onPress,
  color = Palette.SECONDARY_50,
}) => {
  return (
    <HeaderButton onPress={onPress}>
      <Closable fill={color} />
    </HeaderButton>
  )
}
