import { Config } from '@constants/config'

export const convertUrl = (url = '', baseUrl = Config.BASE_URL) => {
  return baseUrl + url
}
