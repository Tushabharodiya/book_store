import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Card from '../../component/Card';
import { Paragrap } from '../../atoms/Atoms';

const Bookdetails = () => {
    let { id } = useParams()
    // console.log(id);

    const [qeuntity, setqeuntity] = useState(1)
    // console.log(qeuntity);

    let book = useSelector((state) => state.userSlice)
    // console.log(book);

    let res = book.book.filter((val) => val._id === id)
    // console.log(res);


    if (res.length === 0) {
        return <div>No book found</div>;
    }
    return (
        <>
            <section className="details">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-7">
                            <div className="details-img">
                                <img src={res[0].profile} alt="book image" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="book-details">
                                <span>Home / My BooksSo, / Anyway…</span>
                                <h2>so</h2>
                                <Paragrap content="Author:Burt Geller" style="paragrap" />
                                <h4>$11.99 – $18.00</h4>
                                <Paragrap content="Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur. Lorem ipsum nonum eirmod dolor." style="paragrap" />
                                <p className='paragrap mb-3'>Format : <span>Online Book, Paper Book</span></p>
                                <p className='paragrap mb-3'>author : <span>Online Book</span></p>
                                <div className="book-btn mt-4 d-flex">
                                    <div className="quntity me-4">
                                        <button> <i className="fa-solid fa-plus pe-3" onClick={() => setqeuntity(qeuntity < 10 ? qeuntity + 1 : 10)} ></i>{qeuntity}
                                            <i className="fa-solid fa-minus ps-3" onClick={() => setqeuntity(qeuntity > 1 ? qeuntity - 1 : 1)} ></i></button>

                                    </div>
                                    <button className='button'>buy now</button>
                                </div>
                            </div>
                        </div>


                        {/* 
    <div className="col-lg-6">
        <Card profile={res[0].profile} title={res[0].title} price={res[0].price} rating={res[0].rating} />
    </div> */}


                    </div>
                </div>
            </section>
        </>
    )
}

export default Bookdetails
