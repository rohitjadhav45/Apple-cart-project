import React from 'react'
import { Link } from 'react-router-dom'
import {DATA} from "../Data"
const Product = () => {
    const cardItem = (item) => {
        return (
            <div className="card py-4 my-4" key={item.id} style={{width: "18rem"}}>
                <img src={item.img} height={300} className="card-img-top" alt={item.title}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                       <p className="lead">${item.price}</p>
                        <Link to={`/Product/${item.id}`} className="btn btn-outline-primary">Buy Were</Link>
                    </div>
            </div>
        )
    }
    return (
        <>
            <div className="container py-5">
                <div className="row ">
                    <div className="col-12 text-center">
                        <h1>Products</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                   {DATA.map(cardItem)}
                </div>
            </div>
        </>
    )
}

export default Product
