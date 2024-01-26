import LocalizedStrings from 'react-native-localization'

export const strings = new LocalizedStrings({
  en: {
    generation: 'Generation',
    harvestButton: 'Harvest',
    history: 'History',
    inoculationButton: 'Inoculate',
    inoculationDate: 'Inoculation date',
    inspectButtonLabel: 'Inspect',
    myceliumNotFound: `This QR doesn't have an associated mycelium.`,
    room: 'Room',
    species: 'Species',
    strainDescription: 'Strain description',
    strainSource: 'Strain source',
    substrate: 'Substrate',
    weight: 'Weight (g)',
  },
  es: {
    generation: 'Generación',
    harvestButton: 'Cosechar',
    history: 'Historial',
    inoculationButton: 'Inocular',
    inoculationDate: 'Fecha de inoculación',
    inspectButtonLabel: 'Inspeccionar',
    myceliumNotFound: `Este QR no tiene un micelio asociado.`,
    room: 'Ambiente',
    species: 'Especie',
    strainDescription: 'Características de la cepa',
    strainSource: 'Origen de la cepa',
    substrate: 'Medio de cultivo',
    weight: 'Peso (g)',
  },
})
