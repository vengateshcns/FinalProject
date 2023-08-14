import React, { useState } from 'react'
import Header from '../../Header Components/Header'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
    // const products = useSelector((state) => state.allProducts.products);
    console.log("Hello World",products)
    // const dispatch = useDispatch();

    const [products, setProducts] = useState([])
  
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // dispatch(setProducts(response.data));
        console.log(response, "Heello")
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  return (
    <Header/>
  )
}
