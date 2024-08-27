import React from 'react'
import { Paragrap } from '../atoms/Atoms'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-data d-flex justify-content-between align-items-center">
                        <Paragrap content="AncoraThemes © 2024. All Rights Reserved." style="paragrap mb-0" />
                        <div className="fot-img">
                            <img src="https://writer.ancorathemes.com/wp-content/uploads/2021/12/logo.png" alt="logo image" />
                        </div>
                        <div className="fot-icon">
                            <span><i className="fa-brands fa-facebook-f"></i></span>
                            <span><i className="fa-brands fa-twitter"></i></span>
                            <span><i className="fa-brands fa-dribbble"></i></span>
                            <span><i className="fa-brands fa-instagram"></i></span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
