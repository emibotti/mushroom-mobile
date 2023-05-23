import { ParseShape } from 'react-native-parsed-text'
import { navigate } from 'src/common/navigation'

import { styles } from './styles'

// Use case: <bu route='ROUTE_HERE'>LABEL_HERE</bu>
const LINK_BUTTON_PATTERN = /<bu route='(.+?)'>(.+?)<\/bu>/i

const handleLinkButtonPress = (matchingString: string) => {
  const route = matchingString.match(LINK_BUTTON_PATTERN)?.[1]
  if (route) {
    navigate(route)
  }
}

const getLinkButtonRoute = (_matchString: string, matches: string[]) => {
  // e.g. [
  //  "<bu route='TermsAndConditions'>Terms & Conditions</bu>",
  //  "TermsAndConditions",
  //  "Terms & Conditions"
  // ]

  return matches[2]
}

export const linkButton: ParseShape = {
  onPress: handleLinkButtonPress,
  pattern: LINK_BUTTON_PATTERN,
  renderText: getLinkButtonRoute,
  style: styles.linkButton,
}
