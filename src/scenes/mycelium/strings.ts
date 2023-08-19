import LocalizedStrings from 'react-native-localization'

export const strings = new LocalizedStrings({
  en: {
    generation: 'Generation',
    history: 'History',
    inoculationDate: 'Inoculation date',
    inspectButtonLabel: 'Inspect',
    myceliumNotFound: `This QR doesn't have an associated mycelium.`,
    species: 'Species',
    strainDescription: 'Strain description',
    strainSource: 'Strain source',
    substrate: 'Substrate',
  },
  es: {
    generation: 'Generación',
    history: 'Historial',
    inoculationDate: 'Fecha de inoculación',
    inspectButtonLabel: 'Inspeccionar',
    myceliumNotFound: `Este QR no tiene un micelio asociado.`,
    species: 'Especie',
    strainDescription: 'Características de la cepa',
    strainSource: 'Origen de la cepa',
    substrate: 'Medio de cultivo',
  },
})
