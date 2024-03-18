import React from 'react'
import './productcard.css'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <div className="container page-wrapper col-4">
            <div className="page-inner">
                <div className="row">
                    <div className="el-wrapper">
                        <div className="box-up">
                            <img className="img" src={props.image} alt="" />
                            <div className="img-info">
                                <div className="info-inner">
                                    <span className="p-name fw-bold fs-2">{props.title}</span>
                                    <span className="p-company fw-bold fs-4">{props.category}</span>
                                </div>
                                <div className="a-size">Brand : <span class="size fw-bold ">{props.brand}</span></div>
                            </div>
                        </div>

                        <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner"></div>
                            </div>

                            <a className="cart">
                                <span className="price">${props.price}</span>
                                <span className="add-to-cart">
                                    <Link className='text-decoration-none text-white fs-5 ' to={`/products/${props.id}`}>More Details</Link>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard