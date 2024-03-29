import LocalizedStrings from 'react-native-localization'

export const generalStrings = new LocalizedStrings({
  en: {
    generationMaster: 'Master',
    generationMother: 'Mother',
    generationRP: 'Reproduction',
    shareOrganizationMessage: `I've created an organization in MushroomApp! Download the app, create an account and join by using this link:`,
    stageBulk: 'Bulk',
    stageCulture: 'Culture',
    stageFruit: 'Fruit',
    stageSpawn: 'Spawn',
  },
  es: {
    generationMaster: 'Máster',
    generationMother: 'Madre',
    generationRP: 'Reproducción',
    shareOrganizationMessage:
      'He creado una organización en MushroomApp! Descarga la app, create una cuenta y luego únete mediante el siguiente enlace:',
    stageBulk: 'Bulk',
    stageCulture: 'Culture',
    stageFruit: 'Fruit',
    stageSpawn: 'Spawn',
  },
})

export const currentLanguage = generalStrings.getLanguage()
