import * as SecureStore from 'expo-secure-store'

export const storage = SecureStore

export interface PersistedUser {
  hasOrganization: boolean
  session: string
}

export enum KeysPersisted {
  USER = 'USER',
}

export const persistObject = async <T>(
  objectToPersist: T,
  keyToPersist: KeysPersisted,
) => {
  await storage.setItemAsync(keyToPersist, JSON.stringify(objectToPersist))
}

export const getPersistedObject = async <T>(
  keyOfObject: KeysPersisted,
): Promise<T> => {
  const encodedObject = await storage.getItemAsync(keyOfObject)
  return encodedObject ? JSON.parse(encodedObject) : undefined
}
export const clearPersistedObject = async (keyOfObject: KeysPersisted) => {
  await storage.deleteItemAsync(keyOfObject)
}
