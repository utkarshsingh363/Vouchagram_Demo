import React from 'react'
import './ProductCard.css'
import Button from '@material-ui/core/Button';

function ProductCard(props) {
    return (
        <div className='product__card'>
            <div className="product__card__right">
                {props.image_url===''?<img src='https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg' />:<img src={props.image_url} />}
            </div>
            <div className="product__card__center">
                <h4>{props.product_name}</h4>
                <span>{props.price_stock[0].name}</span>
                <div className="price">
                    <span className="old"><span>&#8377;  </span>{props.price_stock[0].mrp}</span>
                    <span className="new"><span>&#8377;  </span>{props.price_stock[0].selling_price}</span>
                </div>
            </div>
            <div className="product__card__right">
            <Button variant="contained">Add +</Button>
            </div>
        </div>
    )
}

export default ProductCard
