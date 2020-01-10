import React from 'react';


const GalleryPage = () => {
    return (
        <div className="gallery_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section_title2 text-center mb-90">
                            <i className="flaticon-scissors" />
                            <h3>Our Gallery</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="gallery_active owl-carousel">
                            <div className="single_gallery">
                                <div className="thumb">
                                    <img src="img/gallery/img1.png" alt="" />
                                    <div className="image_hover">
                                        <a className="popup-image" href="img/gallery/1.png">
                                            <i className="ti-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="single_gallery">
                                <div className="thumb">
                                    <img src="img/gallery/img2.png" alt="" />
                                    <div className="image_hover">
                                        <a className="popup-image" href="img/gallery/2.png">
                                            <i className="ti-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="single_gallery">
                                <div className="thumb">
                                    <img src="img/gallery/img3.png" alt="" />
                                    <div className="image_hover">
                                        <a className="popup-image" href="img/gallery/3.png">
                                            <i className="ti-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="single_gallery">
                                <div className="thumb">
                                    <img src="img/gallery/img4.png" alt="" />
                                    <div className="image_hover">
                                        <a className="popup-image" href="img/gallery/1.png">
                                            <i className="ti-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="single_gallery">
                                <div className="thumb">
                                    <img src="img/gallery/img5.png" alt="" />
                                    <div className="image_hover">
                                        <a className="popup-image" href="img/gallery/2.png">
                                            <i className="ti-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="single_gallery">
                                <div className="thumb">
                                    <img src="img/gallery/img6.png" alt="" />
                                    <div className="image_hover">
                                        <a className="popup-image" href="img/gallery/3.png">
                                            <i className="ti-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryPage;