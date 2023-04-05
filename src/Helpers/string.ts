import moment from 'moment'

export const convertStringtoSearch = (str = '') => {
  return str
    ?.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
}

export const converStringToDate = (str = '', format = 'YYYY-MM-DD') => {
  return moment(str, format).toDate()
}
