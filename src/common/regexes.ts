/* eslint-disable no-useless-escape */
export const URL_PARAMS_REGEX = /.*?(?=\?)/
export const EMAIL_REGEX = /^\w+\+*([\.-]?\w+\+*)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
export const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
export const EIGHT_CHAR_REGEX = /^.{8,}$/
export const LOWERCASE_UPPERCASE_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/
export const DIGITS_REGEX = /^(?=.*\d)(?=.*[a-zA-Z])/
