import * as actionTypes from './actionTypes'
import axios from "axios";

export const fetchAllCategories = ()=>{
    return dispatch =>{
        axios.get(`https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop`)
            .then(response=>{
                dispatch(setCategoryList(response.data))
            })
            .catch(error=>{
                console.log(error)
            })
    }
}

export const setCategoryList=(cat)=>{
    return{
        type:actionTypes.FETCH_CATEGORIES,
        payload:cat
    }
}

export const fetchAllProductData = (id)=>{
    return dispatch =>{
        axios.get(` https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=1&category_id=0`)
            .then(response=>{
                dispatch(setAllProductData(response.data))
            })
            .catch(error=>{
                console.log(error)
            })
    }
}

export const setAllProductData=(res)=>{
    return{
        type:actionTypes.FETCH_ALL_PRODUCTS,
        payload:res
    }
}

export const fetchProductByCategory=(catId)=>{
    return dispatch =>{
    axios.get(`https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=1&category_id=${catId}`)
        .then(response=>{
            dispatch(setCategory(response.data,catId))
        })
        .catch(error=>{
            console.group(error)
        })  
    }
}

export const setCategory=(res,category)=>{
    return{
        type:actionTypes.SET_CATEGORY,
        prodData:res,
        activeCategory:category
    }
}

export const fetchProductByPage=(catId,page)=>{
    return dispatch =>{
    axios.get(`https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=${page}&category_id=${catId}`)
        .then(response=>{
            dispatch(setPage(response.data,page))
        })
        .catch(error=>{
            console.group(error)
        })  
    }
}

export const setPage=(res,page)=>{
    return{
        type:actionTypes.SET_PAGE,
        prodData:res,
        activePage:page
    }
}