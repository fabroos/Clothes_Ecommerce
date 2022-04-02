export const adaptSingleProduct = res => {
  const p = res
  console.log(p)
  return {
    id: p.id,
    ...p.data()
  }
}
