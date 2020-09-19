import React,{ useEffect } from 'react';
import './App.css';
import {connect} from 'react-redux'
import * as actions from './store/actions'
import Layout from './layout/Layout'
import ProductListings from './views/productListings/ProductListings'

function App({fetchCategories, fetchAllProducts}) {
  useEffect( () => {
    fetchCategories()
    fetchAllProducts()
  },[]); 

  return (  
    <div className="app">
      <Layout>
        <ProductListings />
      </Layout>
    </div>
  );
}

const mapStateToProps=state=>{
  return{
      categoryList:state.categoryList,
      productList:state.productList
  }
}

const mapDispatchToProps=dispatch=>{
  return{
      fetchCategories:()=>dispatch(actions.fetchAllCategories()),
      fetchAllProducts:()=>dispatch(actions.fetchAllProductData())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
