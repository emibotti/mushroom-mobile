import LocalizedStrings from 'react-native-localization'

export const strings = new LocalizedStrings({
  en: {
    alreadyHaveAnAccount: 'I already have an account',
    confirmPassowordPlaceholder: 'Type your password again',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    passwordNeutral: 'Both passwords must match',
    passwordPlaceholder: 'Type your password',
    passwordsDontMatch: 'Passwords do not match',
    passwordsMatch: 'Passwords match!',
    reEnterPassword: 'Re-enter password',
    registerButton: 'Create account',
    screenHeader: 'Create your account',
  },
  es: {
    alreadyHaveAnAccount: 'Ya tengo una cuenta',
    emailLabel: 'Email',
    passwordLabel: 'Contraseña',
    reEnterPassword: 'Re-ingresa la contraseña',
    registerButton: 'Crear cuenta',
    screenHeader: 'Registrar cuenta',
  },
})
