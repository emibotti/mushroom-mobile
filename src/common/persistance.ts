import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV()

export enum KeysPersisted {
  SESSION_KEY = 'SESSION_KEY',
}

export const persistObject = (
  objectToPersist: any,
  keyToPersist: KeysPersisted,
) => {
  storage.set(keyToPersist, JSON.stringify(objectToPersist))
}

export const getPersistedObject = (keyOfObject: KeysPersisted) => {
  const encodedObject = storage.getString(keyOfObject)
  return encodedObject ? JSON.parse(encodedObject) : undefined
}
export function clearPersistedObject(keyOfObject: KeysPersisted) {
  storage.delete(keyOfObject)
}
