import React, { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const getItemIndex = id => {
    return cart.findIndex(item => item.id === id)
  }
  const addProductToCart = product => {
    const newItemIndex = getItemIndex(product.id)
    const newCart = [...cart]
    if (newItemIndex < 0) {
      newCart.push({ ...product })
    } else {
      const newItem = {
        ...newCart[newItemIndex]
      }
      newItem.quantity += product.quantity
      newCart[newItemIndex] = newItem
    }
    setCart(newCart)
  }
  const removeItem = id => {
    const newItemIndex = getItemIndex(id)
    const newCart = [...cart]
    newCart.splice(newItemIndex, 1)
    setCart(newCart)
  }
  const clear = () => {
    setCart([])
  }
  const isInCart = id => {
    return getItemIndex(id) >= 0
  }
  return (
    <CartContext.Provider
      value={{ addProductToCart, removeItem, clear, isInCart, cart }}
    >
      {children}
    </CartContext.Provider>
  )
}
