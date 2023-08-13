import { createLocalizedStrings } from 'src/common/createLocalizedStrings'

export const strings = createLocalizedStrings({
  en: {
    capitalsRequirement: 'Contain uppercase & lowercase letters',
    minimumCharactersRequirement: 'Minimum 8 characters',
    numbersRequirement: 'Contain numbers & letters',
  },
  es: {
    capitalsRequirement: 'Contiene mayúsculas y minúsculas',
    minimumCharactersRequirement: 'Mínimo 8 caracteres',
    numbersRequirement: 'Contiene números y letras',
  },
})
