// eslint-disable-next-line import/no-extraneous-dependencies
import * as SecureStore from 'expo-secure-store'

export const setToken = (token: string) => {
  return SecureStore.setItemAsync('secure_token', token)
}

export const getToken = async (): Promise<string | undefined> => {
  const token = await SecureStore.getItemAsync('secure_token')
  return token || undefined
}
