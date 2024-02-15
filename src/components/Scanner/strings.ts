import LocalizedStrings from 'react-native-localization'

export const strings = new LocalizedStrings({
  en: {
    noCameraPermission: 'Camera permission was not granted',
    requestingCameraPermission: 'Requesting for camera permission',
  },
  es: {
    noCameraPermission: 'El permiso para la cámara no fue concedido',
    requestingCameraPermission: 'Solicitando permiso para la cámara',
  },
})
