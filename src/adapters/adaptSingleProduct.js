export const adaptSingleProduct = res => {
  const p = res.data
  return {
    id: p.id,
    title: p.title,
    price: p.price,
    stock: p.available_quantity,
    img: p.pictures[0].url
  }
}
