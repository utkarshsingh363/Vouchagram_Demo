import { Avatar } from '@material-ui/core'
import React from 'react'
import './CategoryCard.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    logo:{
        width: theme.spacing(11),
        height: theme.spacing(11),
    }
}))

function CategoryCard(props) {
     const classes = useStyles();
    return (
        <div className='category__card' onClick={()=>props.fetchProductByCategory(props.id)}>
            {props.image !==''? <Avatar src={props.image} className={classes.logo}/>: <Avatar style={{backgroundColor:'orange'}} className={classes.logo}><h1>{props.name[0]}</h1></Avatar>}
            
            <p>{props.name}</p>
        </div>
    )
}

export default CategoryCard
