import { usePersistedUser } from './useSecureStore'

export const useHandleSession = () => {
  const { activeUser } = usePersistedUser()

  console.log('activeUser', activeUser)

  return {
    activeUser,
  }
}
