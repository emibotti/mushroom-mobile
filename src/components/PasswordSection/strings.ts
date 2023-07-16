import LocalizedStrings from 'react-native-localization'

export const strings = new LocalizedStrings({
  en: {
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordPlaceholder: 'Confirm your password',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter your password',
    passwordsDontMatch: 'Passwords do not match',
    passwordsMatch: 'Passwords match!',
    passwordsNeutral: 'Both passwords must match',
  },
  es: {
    confirmPasswordLabel: 'Confirmación de contraseña',
    confirmPasswordPlaceholder: 'Confirma tu contraseña',
    passwordLabel: 'Contraseña',
    passwordNeutral: 'Ambas contraseñas deben coincidir',
    passwordPlaceholder: 'Ingresa tu contraseña',
    passwordsDontMatch: 'Las constraseñas no coinciden',
    passwordsMatch: 'Las constraseñas coinciden!',
  },
})
