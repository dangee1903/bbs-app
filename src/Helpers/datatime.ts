export const converDate = (date: string) => {
  const newDate = date.slice(0, 10).replace(/-/g, '/')
  return newDate
}
