import { useCallback, useState } from 'react'
import { emailValidator } from 'src/common/validators'

export const useEmail = () => {
  const [email, setEmail] = useState<string | undefined>(undefined)
  const [validEmail, setValidEmail] = useState<boolean>(true)

  const checkEmail = useCallback(() => {
    if (!!email && email.length > 0) {
      const checkRegex = emailValidator(email)
      setValidEmail(checkRegex)
    }
  }, [email])

  return {
    checkEmail,
    email,
    setEmail,
    setValidEmail,
    validEmail,
  }
}
