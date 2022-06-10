import { configureStore } from '@reduxjs/toolkit'
import isLoading from './slices/isLoading.slice'
import homeSlice from './slices/home.slice'

export default configureStore({
  reducer: {
    isLoading,
    homeSlice

	}
})