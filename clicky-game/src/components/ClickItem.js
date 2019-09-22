import React from 'react'




function ClickItem(props) {
    return (
        <div className="container col-8 mx-auto">
            <img className="img-thumbnail border border-danger mx-3 my-2"
                alt={props.name}
                src= {props.image}   
                id={props.id}
                onClick={props.clickHandler}
            />
        </div>
    )
}

export default ClickItem;