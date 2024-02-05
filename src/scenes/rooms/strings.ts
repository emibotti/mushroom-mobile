import LocalizedStrings from 'react-native-localization'

export const strings = new LocalizedStrings({
  en: {
    addRoom: 'Add room',
    noRooms: `There are no rooms. To create one, press the 'Add room' button.`,
    roomsHeaderTitle: 'Rooms',
  },
  es: {
    addRoom: 'Agregar ambiente',
    noRooms: `No hay ambientes. Para crear uno, presiona el botón 'Agregar ambiente'.`,
    roomsHeaderTitle: 'Ambientes',
  },
})
