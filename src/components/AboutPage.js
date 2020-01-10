import React from 'react';


const AboutPage = () => {
    return (
        <div>

            <div className="about_area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about_thumb">
                                <img src="img/about/about_lft.png" alt="" />
                                <div className="opening_hour text-center">
                                    <i className="flaticon-clock" />
                                    <h3>Opening Hour</h3>
                                    <p>Mon-Fri (9:00-11:00) <br />
                                        Sat (10:00-9:00)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about_info">
                                <div className="section_title mb-20px">
                                    <span>About Us</span>
                                    <h3>Experienced and <br />
                                        Traditional Stylish <br />
                                        Barber Shop</h3>
                                </div>
                                <p>
                                    Inspires employees and organizations to support causes they care <br />
                                    about. We do this to bring more resources to the nonprofits that are <br />
                                    changing our world.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="video_area">
                <div className="container-fluid p-0">
                    <div className="row align-items-center no-gutters">
                        <div className="col-xl-6 col-lg-6">
                            <div className="video_info">
                                <div className="about_info">
                                    <div className="section_title mb-20px">
                                        <span>How we Work</span>
                                        <h3>Watch the Video <br />
                                            How we Work?</h3>
                                    </div>
                                    <p>Inspires employees and organizations to support causes they care <br />
                                        about. We do this to bring more resources to the nonprofits that are <br />
                                        changing our world.</p>
                                    <a target="_blank" href="https://www.genbook.com/bookings/slot/reservation/30329203?s=." className="boxed-btn3">book now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="video_thumb">
                                <div className="video_thumb_inner">
                                    <img src="img/gallery/img7.png" alt="" />
                                    <a href="https://www.youtube.com/watch?v=I4NcwG-zusE" className="popup-video">
                                        <i className="fa fa-play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="cutter_muster">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section_title2 text-center mb-90">
                                <i className="flaticon-scissors" />
                                <h3>Our Licensed Barbers</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="single_master">
                                <div className="thumb">
                                    <img src="img/barbers/img5.png" alt="" />
                                    <div className="social_link">
                                        <a href="#"><i className="fa fa-envelope" /></a>
                                        <a href="#"><i className="fa fa-twitter" /></a>
                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="master_name text-center">
                                    <h3>Abbie</h3>
                                    <p>Master</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="single_master">
                                <div className="thumb">
                                    <img src="img/barbers/img2.png" alt="" />
                                    <div className="social_link">
                                        <a href="#"><i className="fa fa-envelope" /></a>
                                        <a href="#"><i className="fa fa-twitter" /></a>
                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="master_name text-center">
                                    <h3>Barber Name</h3>
                                    <p>Mens Cut</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="single_master">
                                <div className="thumb">
                                    <img src="img/barbers/img3.png" alt="" />
                                    <div className="social_link">
                                        <a href="#"><i className="fa fa-envelope" /></a>
                                        <a href="#"><i className="fa fa-twitter" /></a>
                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="master_name text-center">
                                    <h3>Missy</h3>
                                    <p>Mens Cut</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="single_master">
                                <div className="thumb">
                                    <img src="img/barbers/img4.png" alt="" />
                                    <div className="social_link">
                                        <a href="#"><i className="fa fa-envelope" /></a>
                                        <a href="#"><i className="fa fa-twitter" /></a>
                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="master_name text-center">
                                    <h3>The One</h3>
                                    <p>Ladies Cut</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default AboutPage;