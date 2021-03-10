import React from 'react'

const Reviewitem = (props) =>{
    const {name, quantity, key, price} = props.product
    const reviewStyle ={
        borderButton:'1px solid lightgrey',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'150px',
    }
    return (
        
        <div style={reviewStyle} className='review-item'>
            <h4>{name}</h4>
            <p>Quantity{quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button 
                className='main-button'
                onClick={()=>props.removeProduct(key)}
            >Remove</button>
        </div>



    )
}

export default Reviewitem;