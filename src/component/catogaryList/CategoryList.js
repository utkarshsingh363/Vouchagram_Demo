import React from 'react'
import './CategoryList.css'
import CategoryCard from '../categoryCard/CategoryCard'
import * as actions from '../../store/actions'
import {connect} from 'react-redux'

function CategoryList(props) {
    const {categoryList, fetchProductByCategory}=props
    return (
        <div className="category__container">
            <h2>Categories</h2>
            <div className='category' >
            {categoryList.lenght===0? <h2>Something went wrong! Categories not available</h2>:
            categoryList.map(category=>{
                return(
                    <CategoryCard key={category.id} id={category.id} name={category.name} image={category.image} fetchProductByCategory={(id)=>fetchProductByCategory(id)}/>
                )
            })}
            </div> 
        </div>

    )   
}

const mapStateToProps=state=>{
    return{
        categoryList:state.categoryList
    }
  }
  
  const mapDispatchToProps=dispatch=>{
    return{
        fetchProductByCategory:(id)=>dispatch(actions.fetchProductByCategory(id))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)
