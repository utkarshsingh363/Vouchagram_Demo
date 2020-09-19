import React from 'react'
import './PaginationBox.css'
import {connect} from 'react-redux'
import * as actions from '../../store/actions'


function PaginationBox({num_pages,activePage,fetchProductByPage,activeCategory}) {
    const array=[]
    for(let i=1;i<=num_pages;i++){
        array.push(i)
    }
    return (
        <div className='pagination__box'>
            {/* <div>&laquo;</div> */}
            {array.map(index=>{
                if(index===activePage){
                    return(<div key={index} id={index} className='active__page'>{index}</div>)
                }else{
                    return(<div key={index} id={index} onClick={()=>fetchProductByPage(activeCategory,index)}>{index}</div>)
                }
            })}
            {/* <div>&raquo;</div> */}
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        num_pages:state.num_pages,
        activePage:state.activePage,
        activeCategory:state.activeCategory
    }
  }
  
  const mapDispatchToProps=dispatch=>{
    return{
        fetchProductByPage:(cat,page)=>dispatch(actions.fetchProductByPage(cat,page))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(PaginationBox)
