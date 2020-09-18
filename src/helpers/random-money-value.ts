export const randomMoneyValue = (): string => {
  const n = Math.floor(Math.random() * 100000)
  return 'R$ ' + n.toFixed()
}
