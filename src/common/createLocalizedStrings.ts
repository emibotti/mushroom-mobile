import LocalizedStrings, { GlobalStrings } from 'localized-strings'
import * as Localization from 'expo-localization'

export function createLocalizedStrings<
  T extends GlobalStrings<T['en'] | T['es']>,
>(translations: T) {
  const strings = new LocalizedStrings<T['en'] | T['es']>(translations)

  // Set the initial language to the device's current locale or fallback to English
  strings.setLanguage(Localization.locale.split('-')[0] || 'en')

  return strings
}
