import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useEmail } from 'src/hooks/useEmail'
import { useLoginMutation } from 'src/store/APIs/auth'

import { usePassword } from './usePassword'
import { usePersistedUser } from 'src/hooks/useSecureStore'

interface OuterProps {
  validEmail: ReturnType<typeof useEmail>['validEmail']
  email: ReturnType<typeof useEmail>['email']
  validPassword: ReturnType<typeof usePassword>['validPassword']
  password: ReturnType<typeof usePassword>['password']
}

// TODO: Define this in networking later
export interface Login {
  email: string
  password: string
}

export const useLoginButton = (
  validEmail: OuterProps['validEmail'],
  email: OuterProps['email'],
  validPassword: OuterProps['validPassword'],
  password: OuterProps['password'],
) => {
  const [buttonEnable, setButtonEnable] = useState<Boolean>(false)
  const [triggerLogin] = useLoginMutation()

  const onPressLogin = () => {
    if (email && password) {
      triggerLogin({ email, password })
    } else {
      Alert.alert('Email or password cannot be empty')
    }
  }

  useEffect(() => {
    if (email && validEmail && password && validPassword) {
      setButtonEnable(true)
    } else {
      setButtonEnable(false)
    }
  }, [validEmail, validPassword, email, password])

  return {
    buttonEnable,
    onPressLogin,
  }
}
