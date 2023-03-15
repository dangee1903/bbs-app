export const converDate = (date: string) => {
  const newDate = date.slice(0, 10).replace(/-/g, '/')
  return newDate
}

export const converYearMonthDay = (date: Date) => {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}
