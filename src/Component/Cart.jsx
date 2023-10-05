import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delItem } from '../Redux/action'

const Cart = () => {
    const state =useSelector((state)=> state.addItem)
    const dispatch=useDispatch()

   const cartItem =(cartItem)=>{
    return(
        <div className="px-4 mt-5 bg-light rounded-3">
            <div className="container">
                <button className="btn"></button>
                <div className="row">
                    <div className="col-md-4">
                        
                    </div>
                </div>
            </div>
        </div>
    )
   }

  return (
    <div>
      {/* {state.length !== 0 && state.map(cartItem)} */}
    </div>
  )
}

export default Cart
