import * as actionTypes from '../actions/actionTypes'

const initialState={
    categoryList:[],
    num_pages:0,
    activeCategory:0,
    activePage:1,
    productList:[],
    allProductData:{}
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_CATEGORIES:
            return{
                ...state,
                categoryList:action.payload.category,
            }
        case actionTypes.FETCH_ALL_PRODUCTS:
            return{
                ...state,
                allProductData:action.payload,
                productList:action.payload.products,
                num_pages:action.payload.num_pages
            }
        case actionTypes.SET_CATEGORY:
            return {
                ...state,
                productList:action.prodData.products,
                activeCategory:action.activeCategory,
                activePage:1,
                num_pages:action.prodData.num_pages
            }
        case actionTypes.SET_PAGE:
            return {
                ...state,
                productList:action.prodData.products,
                activePage:action.activePage
            }
        default:
            return state
    }
}


export default reducer;