import React from 'react'

function ClickItem(props) {
    return (
        <img className='img-thumbnail border border-white' src={props.image} alt={props.name} id={props.key}></img>
    )
}

export default ClickItem;