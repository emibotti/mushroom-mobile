import { useEffect, useState } from 'react'
import { useEmail } from 'src/hooks/useEmail'

import { usePassword } from './usePassword'

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

  const onPressLogin = () => {
    // const credentials: Login = {
    //   email,
    //   password,
    // }
    // loginHandler(credentials)
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
