import { ParseShape } from 'react-native-parsed-text'

import { styles } from './styles'

// Use case: <u>LABEL_HERE</u>
const UNDERLINE_PATTERN = /<u>(.+)<\/u>/i

const getUnderlineLabel = (_matchString: string, matches: string[]) => {
  // e.g. [
  //  "<u>in underline</u>",
  //  "in underline"
  // ]

  return matches[1]
}

export const underlineParsing: ParseShape = {
  pattern: UNDERLINE_PATTERN,
  renderText: getUnderlineLabel,
  style: styles.underline,
}
