import React from 'react'
import Check from 'src/assets/icons/signup/check.svg'
import X from 'src/assets/icons/signup/x.svg'
import { textNotEmptyValidator } from 'src/common/validators'
import { Container } from 'src/components/Container'
import { StyledText } from 'src/components/StyledText'
import { Palette } from 'src/styles/Palette'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { strings } from '../strings'
import { styles } from '../styles'

type PasswordValidationRow = {
  validPassword?: boolean
  validConfirmPassword?: boolean
  secondInputValue?: string
  firstInputValue?: string
}

export const PasswordValidationRow: React.FC<PasswordValidationRow> = ({
  secondInputValue,
  validConfirmPassword,
  validPassword,
  firstInputValue,
}) => {
  const passwordsMatch =
    validPassword &&
    textNotEmptyValidator(secondInputValue) &&
    validConfirmPassword

  const passwordsDontMatch =
    textNotEmptyValidator(secondInputValue) &&
    firstInputValue !== secondInputValue

  return (
    <Container style={styles.passwordValidationRow}>
      {passwordsMatch && (
        <Check style={styles.icon} fill={Palette.SUCCESS_50} />
      )}
      {passwordsDontMatch && <X style={styles.icon} fill={Palette.ERROR_50} />}
      <StyledText
        typography={AppTypography.BODY_LARGE}
        color={
          passwordsDontMatch ? ColorPalette.ERROR_50 : ColorPalette.SECONDARY_50
        }>
        {passwordsMatch
          ? strings.passwordsMatch
          : passwordsDontMatch
          ? strings.passwordsDontMatch
          : strings.passwordNeutral}
      </StyledText>
    </Container>
  )
}
