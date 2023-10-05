import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { DATA } from '../Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../Redux/action';

const ProductDetalil = () => {
  const [cartbtn, setcartbtn] = useState("Add To Cart")
  const proid = useParams();
  const proDetail = DATA.filter(x => x.id == proid.id)
  const product = proDetail[0];
  console.log(product)

  // we need to store usedispatch variable 
  const dispatch = useDispatch()

  const handalecart = (product) => {
    if (cartbtn === "Add To Cart") {
      dispatch(addItem(product))
      setcartbtn("Remove from cart")
    }
    else {
      dispatch(delItem(product))
      setcartbtn("Add To Cart")
    }
  }
  return (
    <div>
      <div className="containter my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className='display-5 fw-bold'>{product.title}</h1>
            <hr />
            <h2 className='my-4'>${product.price}</h2>
            <p className='lead'>{product.desc}</p>
            <button className='btn btn-outline-primary my-5' onClick={() => handalecart(product)}>{cartbtn}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetalil
