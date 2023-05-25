import { ParseShape } from 'react-native-parsed-text'

import { styles } from './styles'

// Use case: <c>LABEL_HERE</c>
const CARD_PATTERN = /<c>(.+)<\/c>/i

const getCardLabel = (_matchString: string, matches: string[]) => {
  // e.g. [
  //  "<c>2 weeks</c>",
  //  "2 weeks"
  // ]

  return matches[1]
}

export const cardParsing: ParseShape = {
  pattern: CARD_PATTERN,
  renderText: getCardLabel,
  style: styles.card,
}
