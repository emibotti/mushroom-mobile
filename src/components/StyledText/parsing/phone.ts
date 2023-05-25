import { ParseShape } from 'react-native-parsed-text'

// Use case: +1XXXXXXXXXX -> (XXX) XXX-XXXX
const PHONE_PATTERN = /\+1[0-9]{10}\b/i

const getPhoneLabel = (_matchString: string, matches: string[]) => {
  return `(${matches[0].slice(2, 5)}) ${matches[0].slice(
    5,
    8,
  )}-${matches[0].slice(8, 12)}`
}

export const phoneParsing: ParseShape = {
  pattern: PHONE_PATTERN,
  renderText: getPhoneLabel,
}
