import LocalizedStrings from 'react-native-localization'

export const strings = new LocalizedStrings({
  en: {
    homeHeader: 'My Production',
    inProgressFilter: 'In progress',
    noInProgress: 'No in progress mycelia',
    noReady: 'No ready mycelia',
    readyFilter: 'Ready',
  },
  es: {
    homeHeader: 'Mi Producción',
    inProgressFilter: 'En progreso',
    noInProgress: 'No hay micelios en curso',
    noReady: 'No hay micelios listos',
    readyFilter: 'Listos',
  },
})
