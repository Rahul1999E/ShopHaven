import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ProductComponent() {

  const products = useSelector((state) => {

    return state.allproducts.product

  })

   

  const productList = products.map((product) => {
    const { title, image, price, category, id } = product;
    return (
      <>
        <div className="card-details">
          <Link to={`/product/${id}`}>
            <div className="card" style={{ width: '19rem', height: '25rem' }} key={id}>
              <img className="card-img-top" id="image" src={image} alt="Cardcap" />

              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">$ {price}</p>
                <p className="card-text">{category}</p>
              </div>
            </div>
          </Link>
        </div>
      </>
    )
  })


  return (
    <>{productList}
    </>

  )

}
export default ProductComponent