import React, { useEffect } from 'react'
import { Button, Navbar, Paragrap } from '../../atoms/Atoms'
import Heading from '../../component/Heading'
import Card from '../../component/Card'
import { useSelector } from 'react-redux'
import Blog from '../../component/Blog'
import Stories from '../../component/Stories'
import Footer from '../../component/Footer'

const Home = () => {

    let blogger = [
        {
            img: "https://writer.ancorathemes.com/wp-content/uploads/2022/01/post-48-840x745.jpg",
            title: "Start your day properly with the hottest novelties",
        },
        {
            img: "https://writer.ancorathemes.com/wp-content/uploads/2022/01/post-49-840x745.jpg",
            title: "Who is your favorite science fiction author?",
        },
        {
            img: "https://writer.ancorathemes.com/wp-content/uploads/2022/01/post-50-840x745.jpg",
            title: "Hot guide: how to survive the great pandemic",
        }
    ]

    let gallery = [
        {
            img: "https://writer.ancorathemes.com/wp-content/uploads/2021/12/post-image-1-840x560.jpg",
        },
        {
            img: "https://writer.ancorathemes.com/wp-content/uploads/2021/12/post-image-2-840x560.jpg"
        },
        {
            img: "https://writer.ancorathemes.com/wp-content/uploads/2021/12/post-image-3-840x560.jpg",
        },
        {
            img: "https://writer.ancorathemes.com/wp-content/uploads/2021/12/post-image-4-840x560.jpg"
        },
        {
            img: "https://writer.ancorathemes.com/wp-content/uploads/2021/12/post-image-5-840x560.jpg"
        },
        {
            img: "https://writer.ancorathemes.com/wp-content/uploads/2021/12/post-image-6-840x560.jpg"
        },
    ]

    let stories = [
        {
            img: "https://writer.ancorathemes.com/wp-content/uploads/2020/04/post-25-890x664.jpg",
            title: "Organize your home library with these simple tips"
        },
        {
            img: "https://writer.ancorathemes.com/wp-content/uploads/2020/04/post-20-890x664.jpg",
            title: "The novel that turns your world upside down",
        },
        {
            img: "https://writer.ancorathemes.com/wp-content/uploads/2020/04/post-23-1024x764.jpg",
            title: "Detective stories classics: Sherlock VS Hercule Poirot",
        },

    ]


    let book = useSelector((state) => state.userSlice)
    // console.log(book);

    return (
        <>

            {/* <Navbar /> */}

            {/* banner */}
            <section className="banner d-flex align-items-center ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-data text-center">
                                <h2>extensive cataloging system</h2>
                                <h1>online search tools <br /> for librarians </h1>
                                <Button content={`read more`} style="button" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* vision */}
            <section className="vision">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="vision-data">
                                <Heading title="creative vision" data="We Collect & Publish Books" />
                                <Paragrap content="Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia." style="paragrap" />
                                <Button content="about us" style="button" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="vision-info position-relative">
                                <div className="vision-img d-flex justify-content-end">
                                    <img src="https://writer.ancorathemes.com/wp-content/uploads/2021/12/image-2.jpg" alt="vision image" />
                                </div>
                                <div className="vision-author position-absolute">
                                    <img src="https://writer.ancorathemes.com/wp-content/uploads/2021/12/image-1.jpg" alt="author image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* shop */}
            <section className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12  d-flex justify-content-center">
                            <div className="shop-head text-center">
                                <Heading title="our shop" data={`Read These Books & Start a New Life`} />
                            </div>
                        </div>
                        {
                            book.book?.map((val,ind) => (
                                <React.Fragment key={ind}>
                                    <div className="col-lg-3">
                                        <Card profile={val.profile} title={val.title} author={val.author} price={val.price} rating={val.rating} />
                                    </div>
                                </React.Fragment>
                            ))
                        }
                        <div className="view-btn d-flex justify-content-center mt-5 pt-1">
                            <Button content="view more books" style="button" />
                        </div>
                    </div>
                </div>
            </section>

            {/* blog */}
            <section className="blog">
                <div className="container">
                    <div className="blog-head">
                        <Heading title="what's new" data="Blog Updates" />
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="blog-img">
                                <img src="https://writer.ancorathemes.com/wp-content/uploads/2022/01/post-47-840x560.jpg" alt="blog image" />
                            </div>
                            <div className="blog-data d-flex justify-content-between">
                                <div className="blog-date">
                                    <h4 className='fs-1 mb-0'> 13<span className='fs-5 text-uppercase'> mar</span></h4>
                                </div>
                                <div className="blog-info">
                                    <h2>What do you need for a calm and relaxing vacation?</h2>
                                    <Paragrap content="Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." style="paragrap" />
                                    <p><span className='me-2'>1 like .</span><span>0 comment</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {
                                blogger.map((val, ind) => (
                                    <React.Fragment key={ind}>
                                        <Blog img={val.img} title={val.title} />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/* gallery */}
            <section className="gallery">
                <div className="container-fuild">
                    <div className="gallery-head text-center">
                        <Heading title="what ew offer" data="Photo Gallery" />
                    </div>
                    <div className="gallery-img">
                        <div className="row p-0 m-0">
                            {
                                gallery.map((val, ind) => (
                                    <React.Fragment key={ind}>
                                        <div className="col-lg-4 p-0">
                                            <img src={val.img} alt="gallery iamge" />
                                        </div>
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/* stories */}
            <section className="stories">
                <div className="container">
                    <div className="stories-head text-center">
                        <Heading title="great new idea" data="Recent Stories" />
                    </div>
                    <div className="row">
                        {
                            stories.map((val, ind) => (
                                <React.Fragment key={ind}>
                                    <div className="col-lg-4">
                                        <Stories img={val.img} title={val.title} />
                                    </div>
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* footer */}
            <Footer />
        </>
    )
}

export default Home
