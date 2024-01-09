import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../Action/product_Action'
import axios from 'axios'
import ProductComponent from './ProductComponent'


function ProductListing() {
  useSelector((state)=>state);
  const dispatch = useDispatch(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        dispatch(setProduct(data));
      } catch (error) {
        console.log(error, "this is error");
      }
    };

    fetchProducts();
  }, [dispatch]);

 


 // console.log("products", product);
  return (
    <>
    <div className="container">
    <ProductComponent/>
    </div>
   

    </>


  )
}

export default ProductListing