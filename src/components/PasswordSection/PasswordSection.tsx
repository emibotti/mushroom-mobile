import React from 'react'
import { View } from 'react-native'
import { Container } from 'src/components/Container'
import { PasswordConditions } from 'src/components/PasswordConditions'
import { PasswordTextInput } from 'src/components/PasswordTextInput'

import { PasswordValidationRow } from './PasswordValidationRow'
import { strings } from './strings'

type PasswordSection = {
  toggleShowPassword: () => void
  showPassword?: boolean
  setPassword: (password: string) => void
  validPassword?: boolean
  eightChar?: boolean
  lowercaseUppercase?: boolean
  digits?: boolean
  emptyPassword?: boolean
  toggleShowConfirmPassword: () => void
  showConfirmPassword?: boolean
  validConfirmPassword?: boolean
  secondInputValue?: string
  setConfirmPassword: (password: string) => void
  firstInputLabel: string
  firstInputPlaceholder?: string
  secondInputLabel: string
  secondInputPlaceholder?: string
  firstInputValue: string | undefined
}

export const PasswordSection: React.FC<PasswordSection> = ({
  secondInputValue,
  setPassword,
  setConfirmPassword,
  validConfirmPassword,
  showPassword,
  showConfirmPassword,
  toggleShowPassword,
  toggleShowConfirmPassword,
  validPassword,
  eightChar,
  lowercaseUppercase,
  digits,
  emptyPassword,
  firstInputLabel,
  firstInputValue,
  firstInputPlaceholder,
  secondInputLabel,
  secondInputPlaceholder,
}) => {
  return (
    <>
      <PasswordTextInput
        label={firstInputLabel ?? strings.passwordLabel}
        value={firstInputValue}
        placeholder={firstInputPlaceholder ?? strings.passwordPlaceholder}
        onChangeText={setPassword}
        validValue={validPassword || emptyPassword}
        secureTextEntry={!showPassword}
        toggleShowPassword={toggleShowPassword}
        showPassword={showPassword as boolean}
      />
      <Container>
        <PasswordConditions
          emptyPassword={emptyPassword as boolean}
          eightChar={eightChar}
          digits={digits}
          lowercaseUppercase={lowercaseUppercase}
        />
      </Container>
      <View>
        <PasswordTextInput
          placeholder={
            secondInputPlaceholder ?? strings.confirmPasswordPlaceholder
          }
          label={secondInputLabel ?? strings.confirmPasswordLabel}
          value={secondInputValue}
          onChangeText={setConfirmPassword}
          validValue={validConfirmPassword}
          secureTextEntry={!showConfirmPassword}
          toggleShowPassword={toggleShowConfirmPassword}
          showPassword={showConfirmPassword as boolean}
        />
        <PasswordValidationRow
          firstInputValue={firstInputValue}
          secondInputValue={secondInputValue}
          validConfirmPassword={validConfirmPassword}
          validPassword={validPassword}
        />
      </View>
    </>
  )
}
