import LocalizedStrings from 'react-native-localization'

export const strings = new LocalizedStrings({
  en: {
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordPlaceholder: 'Confirm your password',
    passwordLabel: 'Password',
    passwordNeutral: 'Both passwords must match',
    passwordPlaceholder: 'Enter your password',
    passwordsDontMatch: 'Passwords do not match',
    passwordsMatch: 'Passwords match!',
  },
  es: {
    confirmPasswordLabel: 'Confirmación de contraseña',
    confirmPasswordPlaceholder: 'Confirma tu contraseña',
    passwordLabel: 'Contraseña',
    passwordNeutral: 'Ambas contraseñas deben coincidir',
    passwordPlaceholder: 'Ingresa tu contraseña',
    passwordsDontMatch: 'Las contraseñas no coinciden',
    passwordsMatch: 'Las contraseñas coinciden!',
  },
})
