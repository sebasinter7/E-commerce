import { configureStore } from '@reduxjs/toolkit'
import isLoading from './slices/isLoading.slice'
import homeSlice from './slices/home.slice'
import purchases from './slices/purchases.slice'
import cart from './slices/cart.slice'

export default configureStore({
  reducer: {
    isLoading,
    homeSlice,
    purchases,
    cart
	}
})