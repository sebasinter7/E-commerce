import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'
import { filterCategories } from '../store/slices/home.slice'

const ProductsDetailed = () => {

    
    const [ detailed, setDetailed ] = useState( {} )
    
    const { id } = useParams( {} )
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const listDetailed = useSelector( state => state.homeSlice )
   
   useEffect( ( ) => {
    //   axios.get( `https://ecommerce-api-react.herokuapp.com/api/v1/products/${ id }` )
    //    .then( res => {
    //        setDetailed( res.data.data.product )
    //        dispatch( filterCategories( res.data.data.product.category.id ) )

        axios.get( 'https://ecommerce-api-react.herokuapp.com/api/v1/products/' )
            .then( res => {
                const newSearch = res.data.data.products.find( newProduct => newProduct.id === Number( id ) )
                setDetailed( newSearch )
                dispatch( filterCategories( newSearch.category.id ) )
            } )
         
   }, [dispatch, id] )

    console.log( detailed )
    //console.log( listDetailed )

    return (
        <div>
            <div className="card center" >
                <h1 
                    className="card-header">
                        { detailed.title }</h1>
                <div className="card-body">
                    <img 
                        src={ detailed.productImgs?.[1] } 
                        className="card-img-top rounded mx-auto d-block"
                        style={ { width : '18rem'} } alt="..." />
                    <h5 
                        className="card-title">
                            { detailed.category?.name }
                    </h5>
                    <p 
                        className="card-text">
                            { detailed.description }.</p>
                </div>
                <div className="card-footer">
                    <small 
                        className="text-muted"><b>Price: </b>
                        { detailed.price }</small>
                </div>
            </div>

            <h3>Suggestions</h3>

            <div className="card-group">

                {
                    listDetailed.map( list => (

                        <div 
                                className="card"
                                key={list.id}
                                style={ { cursor: 'pointer' } }
                                onClick= { ( ) => navigate( `/products/${ list.id }` ) }>
                                <img 
                                    src={ list.productImgs[0] } 
                                    className="card-img-top" 
                                    alt="..." />
                                <div className="card-body">
                                <h5 className="card-title">{ list.title }</h5>
                                <p className="card-text">{ list.category?.name }</p>                                
                                </div>
                            </div>  
                    ) )
                }
            </div>

        </div>
    );
};

export default ProductsDetailed;