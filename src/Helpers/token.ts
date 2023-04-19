// eslint-disable-next-line import/no-extraneous-dependencies
import * as SecureStore from 'expo-secure-store'
import firestore from '@react-native-firebase/firestore'

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

export const saveTokenToDatabase = async (token: string, userId: string) => {
  await firestore()
    .collection('users')
    .doc('NNaSiwlPZOH1Ww4aG5rr')
    .update({
      tokens: firestore.FieldValue.arrayUnion(token),
    })
}
