import { ParseShape } from 'react-native-parsed-text'

// Use case: Converts \\n (escaped) into \n to make it work
const NEWLINE_PATTERN = /\\n/i

const getNewLineLabel = (_matchString: string, _matches: string[]) => '\n'

export const newLineParsing: ParseShape = {
  pattern: NEWLINE_PATTERN,
  renderText: getNewLineLabel,
}
