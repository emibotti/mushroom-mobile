import { createLocalizedStrings } from 'src/common/createLocalizedStrings'

export const strings = createLocalizedStrings({
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
    passwordsDontMatch: 'Las constraseñas no coinciden',
    passwordsMatch: 'Las constraseñas coinciden!',
  },
})
