import LocalizedStrings from 'react-native-localization'

export const strings = new LocalizedStrings({
  en: {
    continueButton: `Continue`,
    emailMessage: `QRs have been sent to your email to be printed.

Check you inbox from a computer and print them, so you can access the mycelia by these QRs.`,
    myceliaCreated: '%s were created:',
    screenHeader: 'Mycelia created!',
  },
  es: {
    continueButton: 'Continuar',
    emailMessage: `Se enviaron los QRs para imprimir a tú correo.

Revisa tú casilla desde una computadora y mándelo a imprimir, así puedes acceder a los micelios a través de estos QRs.`,
    myceliaCreated: 'Se crearon %s:',
    screenHeader: 'Micelios creados!',
  },
})
