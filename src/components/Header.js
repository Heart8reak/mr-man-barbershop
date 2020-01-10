import React from 'react';

// import { NavItem, NavLink } from 'reactstrap';


const Header = () => {

    return (
        <header>
            <div className="header-area">
                <div id="sticky-header" className="main-header-area">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center no gutters">
                            <div className="col-xl-3 col-lg-3">
                                <div className="logo-img">
                                    <a href="/">
                                        <img src="img/logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/about">About</a></li>
                                            <li><a href="/gallery">Gallery</a></li>
                                            <li><a href="/service">service</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="book_room">
                                    <div className="book_btn d-none d-lg-block">
                                        <a className="popup-with-form" href="#test-form">Make an Appointment</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none">

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;