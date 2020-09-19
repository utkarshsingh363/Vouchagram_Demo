import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './Layout.css'
import { IconButton } from '@material-ui/core';


function Layout(props) {
    return (
        <div className='layout'>
            <div className="layout__head">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src='https://www.retailnetworks.in/wp-content/uploads/2020/01/GyFTR-Logo.jpg'/>
                <div className="search__icon">
                    <SearchIcon />
                    <input id='search' placeholder='Serach'/>
                </div>
            </div>
            <div className="layout__body">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;