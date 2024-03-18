import React from 'react'
import ProductCard from '../reusableComponent/ProductCard/ProductCard'

import products from '../Data/products.json'
function Products() {
  console.log(products.products)
  return (
    <>
    <h1>Products</h1>
    
    <div className='row'>
      {products.products.map((el)=> {
        return <ProductCard 
        id = {el.id}
        image = {el.images[0]}
        title = {el.title}
        category = {el.category}
        brand = {el.brand}
        price = {el.price}
        key = {el.id}/>
      })}
    </div>
    </>    
  )
}

export default Products