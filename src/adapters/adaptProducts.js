export const adaptProduct = res => {
  const products = res.data.results.map(p => ({
    id: p.id,
    title: p.title,
    price: p.price,
    stock: p.available_quantity,
    img: p.thumbnail
  }))

  return products
}
