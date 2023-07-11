import LocalizedStrings from 'react-native-localization'

export const strings = new LocalizedStrings({
  en: {
    emailErrorMessage: 'Email address is invalid!',
    emailLabel: 'Email',
    forgotPasswordButton: 'Forgot password?',
    loginButton: 'Login',
    loginHeaderSubtitle: 'Please enter your details below.',
    loginHeaderTitle: 'Welcome!',
    passwordLabel: 'Password',
    registerButton: `I don't have an account`,
  },
  es: {
    emailErrorMessage: 'El email es incorrecto!',
    emailLabel: 'Email',
    forgotPasswordButton: 'Olvidaste tu contraseña?',
    loginButton: 'Iniciar sesión',
    loginHeaderSubtitle: 'Por favor ingrese sus datos.',
    loginHeaderTitle: 'Bienvenido!',
    passwordLabel: 'Contraseña',
    registerButton: `No tengo una cuenta aún`,
  },
})
