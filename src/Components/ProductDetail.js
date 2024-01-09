import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct} from '../Action/product_Action';

function ProductDetail() {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);


  const dispatch = useDispatch();

  const detailProduct = useCallback(async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      const data = response.data;
      dispatch(selectedProduct(data));
    } catch (e) {
      console.log("this is the error", e);
    }
  }, [dispatch, productId]);

  useEffect(() => {
    if (productId !== "") detailProduct(productId);
  }, [detailProduct,productId]);


  console.log("llll",product)
  const {image, price, category, title, description } = product.product;
  console.log("helloww", product.image);


  return (
    <>
    <div className="container mt-5" id="particular">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="product" >
                 <img src={image} alt="Product" />
                    <h2>{title}</h2>
              <p>{category}</p>
              <p>{description}</p>
              <p><strong>${price}</strong></p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
  </div> 
    </>
  );
}

export default ProductDetail;
