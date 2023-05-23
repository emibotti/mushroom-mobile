import { ParseShape } from 'react-native-parsed-text'

import { styles } from './styles'

// Use case: <b>LABEL_HERE</b>
const BOLD_PATTERN = /<b>(.+?)<\/b>/i

const getBoldLabel = (_matchString: string, matches: string[]) => {
  // e.g. [
  //  "<b>in bold</b>",
  //  "in bold"
  // ]

  return matches[1]
}

export const boldParsing: ParseShape = {
  pattern: BOLD_PATTERN,
  renderText: getBoldLabel,
  style: styles.bold,
}
