import React from 'react'

export default function serviceSection() {
    return (
        <>
            <>
                <section className="services xs_mt_80 pt_115 xs_pt_75 pb_95 xs_pb_55">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 m-auto">
                                <div className="section_heading">
                                    <h3>Our Services</h3>
                                    <h2>High-Quality Services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                                <div className="service_item bg-orange-100">
                                    <span className="icon">
                                        <i className="fas fa-palette" />
                                    </span>
                                    <h2>Web Design & Development</h2>
                                    <p>
                                        Our web design & <span style={{ color: "rgb(33, 37, 41)", backgroundColor: "rgba(0, 0, 0, 0.05)" }}>development</span> packages start from 8,000 BDT
                                    </p>
                                    <a href="https://www.creativedesign.com.bd/service/%E0%A6%93%E0%A7%9F%E0%A7%87%E0%A6%AC-%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8-%E0%A6%93-%E0%A6%A1%E0%A7%87%E0%A6%AD%E0%A7%87%E0%A6%B2%E0%A6%AA%E0%A6%AE%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F">
                                        Learn More
                                    </a>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                                <div className="service_item bg-blue-100">
                                    <span className="icon">
                                        <i className="fas fa-laptop" />
                                    </span>
                                    <h2>Software Development</h2>
                                    <p>Our software development packages start from 10,000 BDT</p>
                                    <a href="https://www.creativedesign.com.bd/service/%E0%A6%B8%E0%A6%AB%E0%A6%9F%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B0-%E0%A6%A1%E0%A7%87%E0%A6%AD%E0%A7%87%E0%A6%B2%E0%A6%AA%E0%A6%AE%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F">
                                        Learn More
                                    </a>
                                </div>
                            </div>

                            {/* <div className="col-xl-3 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                                <div className="service_item">
                                    <span className="icon">
                                        <i className="far fa-code" />
                                    </span>
                                    <h2>SEO Services</h2>
                                    <p>Our SEO service packages start from 3,000 BDT</p>
                                    <a href="https://www.creativedesign.com.bd/service/%E0%A6%8F%E0%A6%B8%E0%A6%87%E0%A6%93-%E0%A6%8F%E0%A6%B0-%E0%A6%B8%E0%A6%95%E0%A6%B2-%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AD%E0%A6%BF%E0%A6%B8">
                                        Learn More
                                    </a>
                                </div>
                            </div> */}

                            <div className="col-xl-3 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                                <div className="service_item bg-green-100">
                                    <span className="icon">
                                        <i className="fa fa-server" />
                                    </span>
                                    <h2>Domain, Hosting & Server</h2>
                                    <p>Our domain and hosting packages start from 3,000 BDT</p>
                                    <a href="https://www.creativedesign.com.bd/service/%E0%A6%A1%E0%A7%8B%E0%A6%AE%E0%A7%87%E0%A6%A8,-%E0%A6%B9%E0%A7%8B%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%82-%E0%A6%93-%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AD%E0%A6%BE%E0%A6%B0">
                                        Learn More
                                    </a>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                                <div className="service_item bg-pink-100">
                                    <span className="icon">
                                        <i className="fa-brands fa-facebook"/>
                                    </span>
                                    <h2>Social Media Marketing</h2>
                                    <p>Our social media marketing packages start from 2,000 BDT</p>
                                    <a href="https://www.creativedesign.com.bd/service/%E0%A6%B8%E0%A7%8B%E0%A6%B6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2-%E0%A6%AE%E0%A6%BF%E0%A6%A1%E0%A6%BF%E0%A7%9F%E0%A6%BE-%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%95%E0%A7%87%E0%A6%9F%E0%A6%BF%E0%A6%82">
                                        Learn More
                                    </a>
                                </div>
                            </div>

                            {/* <div className="col-xl-3 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                                <div className="service_item">
                                    <span className="icon">
                                        <i className="far fa-code" />
                                    </span>
                                    <h2>Graphic Design Services</h2>
                                    <p>Our graphic design packages start from 5,000 BDT</p>
                                    <a href="https://www.creativedesign.com.bd/service/%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AB%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B8-%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8-%E0%A6%8F%E0%A6%B0-%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AD%E0%A6%BF%E0%A6%B8">
                                        Learn More
                                    </a>
                                </div>
                            </div> */}

                            {/* <div className="col-xl-3 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                                <div className="service_item">
                                    <span className="icon">
                                        <i className="far fa-code" />
                                    </span>
                                    <h2>UI/UX Design Services</h2>
                                    <p>Our UI/UX design service packages start from 1,000 BDT</p>
                                    <a href="https://www.creativedesign.com.bd/service/UIUX-%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8-%E0%A6%8F%E0%A6%B0-%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AD%E0%A6%BF%E0%A6%B8">
                                        Learn More
                                    </a>
                                </div>
                            </div> */}

                            {/* <div className="col-xl-3 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                                <div className="service_item">
                                    <span className="icon">
                                        <i className="far fa-code" />
                                    </span>
                                    <h2>Product Branding & Design</h2>
                                    <p>Our product branding & design packages start from 8,000 BDT</p>
                                    <a href="https://www.creativedesign.com.bd/service/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%A1%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%9F-%E0%A6%AC%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A1%E0%A6%BF%E0%A6%82-%E0%A6%93-%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8">
                                        Learn More
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>


            </>

        </>
    )
}
