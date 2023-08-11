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

const URL_REGEX =
  /[-a-zA-Z0-9@:/%_+~#=]{1,256}\.[a-zA-Z]{1,256}(\b)*?(\.){0,1}([-a-zA-Z0-9()@:%_+~#?&//=]*)(\b)*?(\.){0,1}([-a-zA-Z0-9()@:%_+~#?&//=]*)/

export const urlParsing: ParseShape = {
  onPress: handleUrlPress,
  pattern: URL_REGEX,
  style: styles.url,
}
