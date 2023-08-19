import { DateTime } from 'luxon'

import { currentLanguage } from './generalStrings'

export const dateConverter = (rawDate: string) =>
  DateTime.fromISO(rawDate).setLocale(currentLanguage).toFormat('ff')

export const optionalDateConverter = (rawDate: string | null) =>
  rawDate ? dateConverter(rawDate) : undefined
