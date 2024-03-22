import React, { useEffect } from 'react'
import ProductCard from '../reusableComponent/ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/productSlice'

function Products() {

  const dispatch = useDispatch();
  const { data: products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  if (loading) {
    return <div className="spinner-border" role="status">
  <span className="sr-only">Loading...</span>
</div>;
  }

  if (error) {
    return <div className="spinner-border" role="status">
  <span className="sr-only">Loading...</span>
</div>;
  }
  
  if(products.products)
  {
    return( 
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
}
export default Products