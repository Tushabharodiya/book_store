import React from 'react'

const Stories = ({ img, title }) => {
    return (
        <>
            <div className="storie-card">
                <div className="stories-img">
                    <img src={img} alt="stories image" />
                </div>
                <div className="stories-data mt-3">
                    <span>Articles</span>
                    <h2>{title}</h2>
                    <p><span>mar 13, 2020 . </span><span>0 comment</span></p>
                </div>
            </div>
        </>
    )
}

export default Stories
