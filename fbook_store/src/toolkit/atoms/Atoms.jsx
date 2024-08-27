import React, { useState } from "react"
import { adminNavbar, userNavbar } from "./Data"

let Navbar = ({ element }) => {

    const [role, setrole] = useState(element == "admin" ? adminNavbar : userNavbar)


    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="https://writer.ancorathemes.com/wp-content/uploads/2021/12/logo.png" alt="logo image" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="hrad-info d-flex flex-grow-1 align-items-center">
                            <ul className="navbar-nav justify-content-center flex-grow-1">
                                {
                                    role?.map((val, ind) => (
                                        <React.Fragment key={ind}>
                                            <li className="nav-item">
                                                <a className="nav-link" href={val.path}>{val.name}</a>
                                            </li>
                                        </React.Fragment>
                                    ))
                                }
                            </ul>
                            <div className="head-icon">
                                <span><i className="fa-brands fa-facebook-f"></i></span>
                                <span><i className="fa-brands fa-twitter"></i></span>
                                <span><i className="fa-brands fa-dribbble"></i></span>
                                <span><i className="fa-brands fa-instagram"></i></span>
                                <span><i className="fa-solid fa-bag-shopping"></i></span>
                                <button className="button">logout</button>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}


let Button = ({ content, style }) => (
    <button className={style}>{content}</button>
)


let Paragrap = ({ content, style }) => (
    <p className={style}>{content}</p>
)

export { Navbar, Button, Paragrap }