import React, { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(new Map())
  const [error, setError] = useState(false)

  const addProductToCart = product => {
    const newCart = new Map(cart)
    setError(false)
    if (newCart.has(product.id)) {
      const item = newCart.get(product.id)
      if (item.quantity + product.quantity > product.stock) {
        return setError(true)
      }
      item.quantity += product.quantity
    } else {
      newCart.set(product.id, product)
    }
    setCart(newCart)
  }

  const removeItem = id => {
    const newCart = new Map(cart)
    if (newCart.has(id)) newCart.delete(id)
    setCart(newCart)
  }
  const clear = () => {
    setCart(new Map())
  }
  const isInCart = id => {
    return cart.has(id)
  }

  const cartQuantity = () => {
    let cantidad = 0
    cart.forEach(item => (cantidad += item?.quantity || 0))
    return cantidad
  }
  const totalPrice = () => {
    let total = 0
    cart.forEach(item => (total += item?.quantity * item?.price || 0))
    return total
  }
  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        removeItem,
        clear,
        isInCart,
        cart,
        error,
        cartQuantity,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
