import { Linking } from 'react-native'
import { ParseShape } from 'react-native-parsed-text'

import { styles } from './styles'

const handleUrlPress = (url: string) => {
  if ((url && url.includes('http://')) || url.includes('https://')) {
    Linking.openURL(url)
  } else {
    Linking.openURL(`http://${url}`)
  }
}

const renderUrl = (matchString: string) => matchString.toLowerCase()

const URL_REGEX =
  /\b((https?:\/\/)?(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,})(?:[/\w.-]*)*\/?(?:\?[a-z0-9=&%-_.~+]*[#/\w.-]*)?)\b/gi

export const urlParsing: ParseShape = {
  onPress: handleUrlPress,
  pattern: URL_REGEX,
  renderText: renderUrl,
  style: styles.url,
}
