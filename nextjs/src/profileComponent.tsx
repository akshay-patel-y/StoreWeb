import React from 'react'

export const profileComponent = ({ name, description, size, photo }) => {
    return (
        <div>
                <h1>{name}</h1>
            <div >
                <img  src={photo} alt="" />
                <div >
                    <p>{size}</p>
                </div>
                <p >{description}</p>
              

            </div>
        </div>
    )
}

