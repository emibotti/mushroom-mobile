import { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import {
  persistObject,
  getPersistedObject,
  KeysPersisted,
  clearPersistedObject,
  PersistedUser,
} from 'src/common/persistance'
import { useAppDispatch } from 'src/store'
import {
  selectSession,
  setActiveUser,
} from 'src/store/storage/session/sessionSlice'

export const usePersistedUser = () => {
  const dispatch = useAppDispatch()

  const dispatchStoredValue: (user: PersistedUser | undefined) => void =
    useCallback(user => dispatch(setActiveUser(user)), [dispatch])

  const activeUser = useSelector(selectSession)

  useEffect(() => {
    ;(async () => {
      const storedValue = await getPersistedObject<PersistedUser>(
        KeysPersisted.USER,
      )
      dispatchStoredValue(storedValue)
    })()
  }, [])

  const setStoredValue = async (newValue: PersistedUser) => {
    await persistObject(newValue, KeysPersisted.USER)
    dispatchStoredValue(newValue)
  }

  const clearStoredValue = async () => {
    await clearPersistedObject(KeysPersisted.USER)
    dispatchStoredValue(undefined)
  }

  return { activeUser, setStoredValue, clearStoredValue }
}
