export const adaptCategories = res => {
  const products = res.docs.map(p => {
    return {
      id: p.id,
      ...p.data()
    }
  })

  return products
}
