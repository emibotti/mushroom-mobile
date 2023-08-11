import { useCallback, useState } from 'react'
import {
  digitsValidator,
  eightCharValidator,
  lowercaseUppercaseValidator,
} from 'src/common/validators'

export const usePassword = () => {
  const [password, setPassword] = useState<string | undefined>(undefined)

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [confirmPassword, setConfirmPassword] = useState<string | undefined>(
    undefined,
  )

  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const toggleShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword],
  )
  const toggleShowConfirmPassword = useCallback(
    () => setShowConfirmPassword(!showConfirmPassword),
    [showConfirmPassword],
  )

  const emptyPassword = password === undefined || password?.length === 0

  const validated = password === confirmPassword && !emptyPassword

  const checkPassword = (pass?: string) => {
    let validPassword = false
    let eightChar
    let lowercaseUppercase
    let digits

    if (!!pass && pass.length > 0) {
      eightChar = eightCharValidator(pass)
      lowercaseUppercase = lowercaseUppercaseValidator(pass)
      digits = digitsValidator(pass)
      validPassword = eightChar && lowercaseUppercase && digits
    }
    return {
      digits,
      eightChar,
      lowercaseUppercase,
      validPassword,
    }
  }

  const validConfirmPassword =
    password === confirmPassword ||
    confirmPassword === undefined ||
    confirmPassword.length === 0

  return {
    checkPassword,
    confirmPassword,
    emptyPassword,
    password,
    setConfirmPassword,
    setPassword,
    showConfirmPassword,
    showPassword,
    toggleShowConfirmPassword,
    toggleShowPassword,
    validConfirmPassword,
    validated,
  }
}
