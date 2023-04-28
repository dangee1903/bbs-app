// eslint-disable-next-line import/no-extraneous-dependencies
import * as SecureStore from 'expo-secure-store'
import { collection, addDoc } from 'firebase/firestore'
import { FIREBASE_FIRESTORE } from 'firebaseConfig'

export const setToken = (token: string) => {
  return SecureStore.setItemAsync('secure_token', token)
}

export const getToken = async (): Promise<string | undefined> => {
  const token = await SecureStore.getItemAsync('secure_token')
  return token || undefined
}

export const removeToken = async (): Promise<void> => {
  await SecureStore.deleteItemAsync('secure_token')
}

export const saveTokenToDatabase = async (tokens: string, userId: number) => {
  try {
    await addDoc(collection(FIREBASE_FIRESTORE, 'users'), {
      tokens,
      userId,
    })
    // eslint-disable-next-line no-empty
  } catch (e) {}
}
