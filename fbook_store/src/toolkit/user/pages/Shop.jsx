import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../component/Card'
import { Link } from 'react-router-dom'

const Shop = () => {

  let books = useSelector((state) => state.userSlice)


  return (
    <>

      {/*  product*/}
      <section className="product d-flex align-items-center justify-content-center">
        <div className="pro-data">
          <h1>shop</h1>
          <span className='d-block'><i className="fa-solid fa-angle-down"></i></span>
        </div>
      </section>

      {/* books */}
      <section className="books">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sider">
                <div className="category pt-0">
                  <h2 className='mb-4'>Search</h2>
                  <div className="search">
                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="search" placeholder='Search for product ...' />
                  </div>
                </div>
                <div className="category">
                  <h2>category</h2>
                  <ul>
                    <li><a href="#" className='all'>All categories</a></li>
                    <li><a href="#">Uncategorized</a></li>
                    <li><a href="#">Busines</a></li>
                    <li><a href="#">Entertainment</a></li>
                    <li><a href="#">Motivation</a></li>
                    <li><a href="#">My Books</a></li>
                  </ul>
                </div>
                <div className="category Genres">
                  <h2>Genres</h2>
                  <ul>
                    <li><a href="#"><input type="checkbox" /> Cookbook</a></li>
                    <li><a href="#"><input type="checkbox" /> Drama</a></li>
                    <li><a href="#"><input type="checkbox" /> Mystery</a></li>
                    <li><a href="#"><input type="checkbox" /> Novel</a></li>
                    <li><a href="#"><input type="checkbox" /> Romance</a></li>
                  </ul>
                </div>
                <div className="category Genres">
                  <h2>Author</h2>
                  <ul>
                    <li><a href="#"><input type="checkbox" /> Burt Geller</a></li>
                    <li><a href="#"><input type="checkbox" /> Drew Berrymore</a></li>
                    <li><a href="#"><input type="checkbox" /> Karen Perry</a></li>
                    <li><a href="#"><input type="checkbox" /> Richard Mann</a></li>
                  </ul>
                </div>
                <div className="category Genres">
                  <h2>Format</h2>
                  <ul>
                    <li><a href="#"><input type="checkbox" /> Online Book</a></li>
                    <li><a href="#"><input type="checkbox" /> Paper Book</a></li>
                  </ul>
                </div>
                <div className="category Genres">
                  <h2>Rating</h2>
                  <ul>
                    <li><a href="#"><input type="checkbox" /><i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </a></li>
                    <li><a href="#"><input type="checkbox" /><i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i></a></li>
                    <li><a href="#"><input type="checkbox" /><i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="book-data">
                <div className="row">
                  {
                    books.book?.map((val, ind) => (
                      <React.Fragment key={ind} >
                        <div className="col-lg-4">
                          <Card profile={val.profile} title={val.title} author={val.author} price={val.price} rating={val.rating} />
                          <Link to={`/${val._id}`}><button className='button w-100'>view</button></Link>
                        </div>
                      </React.Fragment>
                    ))
                  }
                </div>  
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
