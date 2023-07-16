import React from 'react'
import Check from 'src/assets/icons/signup/check.svg'
import Minus from 'src/assets/icons/signup/minus.svg'
import X from 'src/assets/icons/signup/x.svg'
import { StyledText } from 'src/components/StyledText'
import { Palette } from 'src/styles/Palette'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { styles } from './styles'
import { ICondition } from './types'

export const Condition: React.FC<ICondition> = ({
  emptyPassword,
  fulfilledCondition,
  condition,
}) => {
  return (
    <>
      {emptyPassword ? (
        <Minus fill={Palette.SECONDARY_50} />
      ) : fulfilledCondition ? (
        <Check fill={Palette.SUCCESS_50} />
      ) : (
        <X fill={Palette.ERROR_50} />
      )}
      <StyledText
        style={styles.conditionText}
        typography={AppTypography.BODY_LARGE}
        color={ColorPalette.SECONDARY_50}>
        {condition}
      </StyledText>
    </>
  )
}
