import { useMMKVObject } from 'react-native-mmkv'
import { KeysPersisted, PersistedUser } from 'src/common/persistance'

export const useHandleSession = () => {
  // TODO: Is it the best or use cache instead?
  const [activeUser] = useMMKVObject<PersistedUser>(KeysPersisted.USER)

  return {
    activeUser,
  }
}
