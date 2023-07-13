import { useMMKVString } from 'react-native-mmkv'
import { KeysPersisted } from 'src/common/persistance'

export const useHandleSession = () => {
  // TODO: Is it the best or use cache instead?
  const [activeSession] = useMMKVString(KeysPersisted.SESSION_KEY)

  return {
    activeSession,
  }
}
