import LocalizedStrings from 'react-native-localization'

export const strings = new LocalizedStrings({
  en: {
    co2Label: 'CO2',
    createRoomButton: 'Create room',
    humidityLabel: 'Humidity',
    notesLabel: 'Notes',
    roomNameLabel: 'Name',
    screenHeader: 'New room',
    screenSubtitle: `Enter the initial values for the new room. In the future you can make measurements. The notes are the only optional value.`,
    temperatureLabel: 'Temperature',
  },
  es: {
    co2Label: 'CO2',
    createRoomButton: 'Crear ambiente',
    humidityLabel: 'Humedad',
    notesLabel: 'Notas',
    roomNameLabel: 'Nombre',
    screenHeader: 'Nuevo ambiente',
    screenSubtitle:
      'Ingresa los datos iniciales del nuevo ambiente. Luego podrás sacar realizarle mediciones. Las notas son lo único opcional.',
    temperatureLabel: 'Temperatura',
  },
})
