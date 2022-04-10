export const adaptSingleProduct = res => {
  const p = res
  return {
    id: p.id,
    ...p.data()
  }
}
