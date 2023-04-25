export const convertDate = (date: string) => {
  const newDate = date.slice(0, 10).replace(/-/g, '/')
  return newDate
}

export const convertYearMonthDay = (date: Date) => {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}
