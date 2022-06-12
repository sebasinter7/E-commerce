import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterCategories, filterProducts, getHome } from '../store/slices/home.slice';

const Home = () => {

    const dispatch = useDispatch( )
    const navigate = useNavigate( )

    const [ search, setSearch ] = useState( "" )
    const [ categories, setCategories ] = useState( [] )

    const products = useSelector( state => state.homeSlice )

    useEffect( ( ) => {
        dispatch( getHome( ) )

        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
            .then( res => setCategories( res.data.data.categories ) )

    }, [dispatch] )

    const productsFilter = ( ) => {
        dispatch( filterProducts( search ) )
    }

    const selectCategory = ( id ) => {
        dispatch( filterCategories( id ) )
    }

    return (
        <div>
            <h1>Home</h1>

            <ul className="list-group list-group-horizontal-xl">
                {
                    categories.map( category => (
                        <li 
                            className="list-group-item" 
                            style={ { cursor: "pointer" } }
                            key={ category.id }
                            onClick={ ( ) => selectCategory( category.id ) }>
                                { category.name }
                        </li>
                     ) )
                }                
            </ul>

            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Recipient's username" 
                    aria-label="Recipient's username" 
                    aria-describedby="button-addon2"
                    onChange={ e => setSearch(e.target.value) }
                    value={ search } />
                <button 
                    className="btn btn-outline-secondary" 
                    type="button" 
                    id="button-addon2"
                    onClick={ productsFilter }
                    >Search</button>
            </div>

                    <div 
                        className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            products.map( product => (
                                
                                <div 
                                    className="col" 
                                    key={ product.id } 
                                    onClick={ ( ) => navigate( `/products/${ product.id }` ) }>
                                    <div 
                                        className="card h-100">
                                        <img 
                                            src={ product.productImgs[0] } 
                                            className="rounded" 
                                            alt="" />
                                        <div 
                                            className="card-body">
                                            <h5 
                                                className="card-title">
                                                    { product.title }
                                            </h5>
                                            <p 
                                                className="card-text">
                                                    { product.description }
                                            </p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted"><b>Price: </b>{ product.price }</small>
                                        </div>
                                    </div>
                                </div>                        
                                
                            ) )
                         }
            </div>
        </div>
    );
};

export default Home;