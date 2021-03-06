import React from 'react';


const FooterPage = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                        Join With Us
                  </h3>
                                    <p className="footer_text doanar">
                                        <a className="first" target="_blank" href="https://www.genbook.com/bookings/slot/reservation/30329203?s=">Make Appointment</a> <br />
                                    </p>

                                </div>
                            </div>
                            <div className="col-xl-5 col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                        address
                  </h3>
                                    <p className="footer_text">2302 Edgewater Dr, Orlando, FL, USA <br />
                                        (407) 684-2866 <br />

                                        <button><a href="mailto:mrmanbarbershop@gmail.com">Email Us</a></button>
                                    </p>
                                    <div className="socail_links">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-facebook-square" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://www.instagram.com/mrmancollegepark/">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-lg-2">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                        Navigation
                  </h3>
                                    <ul id="navigation">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/gallery">Gallery</a></li>
                                        <li><a href="/service">service</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-xl-4 col-md-6 col-lg-4">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                        Newsletter
                  </h3>
                                    <form action="#" className="newsletter_form">
                                        <input type="text" placeholder="Enter your mail" />
                                        <button type="submit">Sign Up</button>
                                    </form>
                                    <p className="newsletter_text">Subscribe newsletter to get updates</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="copy-right_text">
                    <div className="container">
                        <div className="footer_border" />
                        <div className="row">
                            <div className="col-xl-12">
                                <p className="copy_right text-center">
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright ©
                                    All rights reserved | This
                  template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    )
}

export default FooterPage;