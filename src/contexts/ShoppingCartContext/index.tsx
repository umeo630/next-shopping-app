import React, { useContext, useReducer } from 'react'
import { Product } from 'types/data'

type ShoppingCartContextType = {
  cart: Product[]
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId: number) => void
}

const ShoppingCartContext = React.createContext<ShoppingCartContextType>({
  cart: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addProductToCart: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeProductFromCart: () => {},
})

export const useShoppingCartContext = (): ShoppingCartContextType =>
  useContext<ShoppingCartContextType>(ShoppingCartContext)

interface ShoppingCartContextProviderProps {
  children?: React.ReactNode
}

/**
 * ショッピングカートコンテキストプロバイダー
 */
export const ShoppingCartContextProvider = ({
  children,
}: ShoppingCartContextProviderProps) => {
  const products: Product[] = []
  const [cartState, dispatch] = useReducer(shopReducer, products)

  // 商品をカートに追加
  const addProductToCart = (product: Product) => {
    dispatch({ type: ADD_PRODUCT, payload: product })
  }
}
