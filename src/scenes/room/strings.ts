import LocalizedStrings from 'react-native-localization'

export const strings = new LocalizedStrings({
  en: {
    addMycelium: 'Add mycelium',
    co2: 'CO 2',
    humidity: 'Humidity',
    noMycelium: `There are no mycelium in this room. To create one, press the 'Add mycelium' button.`,
    roomHeaderTitle: 'Room',
    temperature: 'Temperature',
  },
  es: {
    addMycelium: 'Agregar micelio',
    co2: 'CO 2',
    humidity: 'Humedad',
    noMycelium: `No hay micelios existentes en este ambiente. Para crear uno, presiona el botón "Agregar micelio".`,
    roomHeaderTitle: 'Ambiente',
    temperature: 'Temperatura',
  },
})
