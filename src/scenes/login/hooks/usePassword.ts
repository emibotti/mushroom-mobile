import { useState } from 'react'
import { TextInputProps } from 'react-native'

export const usePassword = () => {
  const [password, setPassword] = useState<string | undefined>(undefined)
  const [validPassword, setValidPassword] = useState<boolean>(true)

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const toggleShowPassword = () => setShowPassword(!showPassword)

  const onChangePassword: TextInputProps['onChangeText'] = text => {
    setPassword(text)
  }

  return {
    onChangePassword,
    password,
    setValidPassword,
    showPassword,
    toggleShowPassword,
    validPassword,
  }
}
