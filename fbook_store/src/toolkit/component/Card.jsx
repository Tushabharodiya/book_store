import React from 'react'
import { Paragrap } from '../atoms/Atoms'

const Card = ({ profile, title, author, price, rating }) => {
    return (
        <>
            <div className="book-card">
                <div className="card-data">
                    <div className="card-img">
                        <img src={profile} alt="book image" />
                    </div>
                    <div className="card-list">
                        <h2>{title}</h2>
                        <Paragrap content={author} style="Paragrap" />
                        <span className='d-block'>${price}</span>
                        <div className="star">
                            {[...Array(5)].map((_, index) => (
                                <i key={index}
                                    className={`fa-star ${index < rating ? 'fa-solid' : 'fa-regular'}`}>
                                </i>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
