import React, { useState } from 'react'
import Header from '../../Header Components/Header'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    // const products = useSelector((state) => state.allProducts.products);
    // const dispatch = useDispatch();

    const [products, setProducts] = useState([])
    console.log("Hello World",products)
  
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        // dispatch(setProducts(response.data));
        setProducts(response.data)
        console.log(response, "Heello")
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    useEffect(() => {
      fetchProducts();
    }, []);
  return (
    <>
    <Header/>
    {products?.length > 0 && products?.map((item, index) => {
      const {image = '', title = '', description='', id = ''} = item || {}
      return( 
      <Link to={`products/${id}`}>
        <img src={image} alt={title} />
        Title: {title}
        Description: {description}
      </Link>
    )
    })}
    </>
  )
}
