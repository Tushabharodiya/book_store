import React from 'react'

const Heading = ({ title, data }) => {
    return (
        <>
            <div className="heading">
                <div className="heading-data">
                    <span>{title}</span>
                    <h2>{data}</h2>
                </div>
            </div>
        </>
    )
}

export default Heading
