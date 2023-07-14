import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV()

export interface PersistedUser {
  hasOrganization: boolean
  session: string
}

export enum KeysPersisted {
  USER = 'USER',
}

export const persistObject = <T>(
  objectToPersist: T,
  keyToPersist: KeysPersisted,
) => {
  storage.set(keyToPersist, JSON.stringify(objectToPersist))
}

export const getPersistedObject = <T>(keyOfObject: KeysPersisted): T => {
  const encodedObject = storage.getString(keyOfObject)
  return encodedObject ? JSON.parse(encodedObject) : undefined
}
export function clearPersistedObject(keyOfObject: KeysPersisted) {
  storage.delete(keyOfObject)
}
