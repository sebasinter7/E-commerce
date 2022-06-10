import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const homeSlice = createSlice({
		name: 'home',
        initialState: [],
         reducers: {
            setHome: ( state, action ) => {
                return action.payload
        }
    }
})

export const { setHome } = homeSlice.actions;

export const getHome = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then( res => dispatch( setHome(res.data.data.products )))
        .finally(( ) => dispatch(setIsLoading(false)));
}

export const filterProducts = ( query ) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${ query }`)
        .then( res => dispatch( setHome( res.data.data.products) ) )
        .finally(( ) => dispatch(setIsLoading(false)));
}

export const filterCategories = ( id ) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get( `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${ id }` )
        .then( res => dispatch( setHome( res.data.data.products ) ) )
        .finally(() => dispatch(setIsLoading(false)));
}

export default homeSlice.reducer;