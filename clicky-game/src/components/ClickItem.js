import React from 'react'



function ClickItem({key, name, image, clickHandler}) {
    return (
        <div className="container mx-auto">
            <img className="mx-3 my-2"
                src={image}
                alt={name}
                id={key}
            />
        </div>
    )
}

export default ClickItem;