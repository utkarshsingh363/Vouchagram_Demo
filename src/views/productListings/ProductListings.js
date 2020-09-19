import React from 'react'
import './ProductListings.css'
import CategoryList from '../../component/catogaryList/CategoryList'
import ProductList from '../../component/productList/ProductList'
import PaginationBox from '../../component/paginationBox/PaginationBox'

function ProductListings(props) {
    return (
        <div className='product__listings'>
            <div className="ad__box">
                <img src='https://pogo91-static.s3.amazonaws.com/media/banners/fl1.jpg' />
            </div>
            <CategoryList />
            <ProductList />
            <div className="pagination__component">
                <PaginationBox />
            </div>
        </div>
    )
}

export default ProductListings
