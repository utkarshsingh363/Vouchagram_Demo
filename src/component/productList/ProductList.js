import React from 'react'
import './ProductList.css'
import ProductCard from '../productCard/ProductCard'
import {connect} from 'react-redux'

function ProductList({productList}) {
    return (
        <div className='product__list'>
            <h2>Products</h2>
            <div className="product__item__box">
                {productList.length===0? <h2>No Products Available in this Category</h2>:
                productList.filter(prod=> prod.price_stock[0].selling_price!==0).map(prod=>{
                    return(
                        <ProductCard key={prod.product_id} image_url={prod.image_url} product_name={prod.product_name} price_stock={prod.price_stock}/>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        productList:state.productList
    }
  }
  
  const mapDispatchToProps=dispatch=>{
    return{
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
