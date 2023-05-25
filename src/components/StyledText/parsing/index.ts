import { ParsedTextProps } from 'react-native-parsed-text'

import { boldParsing } from './bold'
import { cardParsing } from './card'
import { hyperLinkParsing } from './hyperLinkParsing'
import { linkButton } from './linkButton'
import { newLineParsing } from './newLine'
import { phoneParsing } from './phone'
import { underlineParsing } from './underlineParsing'
import { urlParsing } from './urlParsing'

export const buildTextParsing = (): ParsedTextProps['parse'] => [
  hyperLinkParsing,
  boldParsing,
  urlParsing,
  cardParsing,
  newLineParsing,
  underlineParsing,
  linkButton,
  phoneParsing,
]
