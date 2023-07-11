import {
  DIGITS_REGEX,
  EIGHT_CHAR_REGEX,
  EMAIL_REGEX,
  LOWERCASE_UPPERCASE_REGEX,
  PASSWORD_REGEX,
} from './regexes'

export const emailValidator = (email?: string) => {
  return email ? EMAIL_REGEX.test(email) : false
}

export const textNotEmptyValidator = (text?: string) =>
  !!text && text.trim().length > 0

export const passwordValidator = (password?: string) => {
  return password ? PASSWORD_REGEX.test(password) : false
}
export const eightCharValidator = (password?: string) => {
  return password ? EIGHT_CHAR_REGEX.test(password) : false
}

export const lowercaseUppercaseValidator = (password?: string) => {
  return password ? LOWERCASE_UPPERCASE_REGEX.test(password) : false
}

export const digitsValidator = (password?: string) => {
  return password ? DIGITS_REGEX.test(password) : false
}
