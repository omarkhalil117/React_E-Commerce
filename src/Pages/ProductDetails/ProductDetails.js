import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../../Data/products.json'
import './productdetails.css'
function ProductDetails() {

  const productId = Number(useParams().id)
  console.log(productId)
  const product = products.products.find((el)=> el.id === productId )
  console.log(product)
  return (
    <>
    <h1>Product Details</h1> 
    <img className='d-block m-auto pt-2 ' src={product.images[0]} alt='Product'/>

    <div className='d-inline-block subimgs'>
    {product.images.slice(2).map((image)=> {
      return <img src={image} className='subimg m-3' alt='sub Img'/>
    })}
    </div>
    <h2>Title : {product.title}</h2>
    <h2>Brand : {product.brand}</h2>
    <h2>Category : {product.category}</h2>

    </>
  )
}

export default ProductDetails