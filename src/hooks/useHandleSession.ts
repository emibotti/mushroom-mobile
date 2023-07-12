import { useSelector } from 'react-redux'
import { selectAuthSession } from 'src/store/storage/headers'

export const useHandleSession = () => {
  // TODO: Why not use cache????
  const activeSession = useSelector(selectAuthSession)

  return {
    activeSession,
  }
}
