import { Linking } from 'react-native'
import { ParseShape } from 'react-native-parsed-text'

import { styles } from './styles'

// Use case: <a href='LINK_HERE'>LABEL_HERE</a> || <a href="LINK_HERE">LABEL_HERE</a>
const HYPERLINK_PATTERN = /<a href=("|')(.+?)("|')>(.+?)<\/a>/

const handleHyperlinkPress = (matchingString: string) => {
  const url = matchingString.match(HYPERLINK_PATTERN)?.[2]
  if (url) {
    Linking.openURL(url)
  }
}

const getHyperlinkLabel = (_matchString: string, matches: string[]) => {
  // e.g. [
  //  "<a href='https://www.mrinz.ac.nz/programmes/stroke'>Take Charge After Stroke (TaCAS)</a>",
  //  "https://www.mrinz.ac.nz/programmes/stroke",
  //  "Take Charge After Stroke (TaCAS)"
  // ]
  // e.g. 2 (todos from the cms) [
  //  "<a href='https://todo.com'>Todo</a>",
  //  `'`
  //  "https://todo.com",
  //  `'`
  //  "Todo"
  // ]

  return matches[4]
}

export const hyperLinkParsing: ParseShape = {
  onPress: handleHyperlinkPress,
  pattern: HYPERLINK_PATTERN,
  renderText: getHyperlinkLabel,
  style: styles.hyperLink,
}
