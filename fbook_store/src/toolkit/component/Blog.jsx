import React from 'react'

const Blog = ({ img, title }) => {
    return (
        <>
            <div className="blog-card d-flex ">
                <div className="blogger-img">
                    <img src={img} alt="blogger image" />
                </div>
                <div className="blogger-data align-self-center ">
                    <span><a href="#">updates</a></span>
                    <span className='data'><a href="#"> mar 13 , 2020</a></span>
                    <h2 className='mb-0'>{title}</h2>
                </div>
            </div>
        </>
    )
}

export default Blog
