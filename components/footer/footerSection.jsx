import React from 'react'
import Link from 'next/link'

export default function footerSection() {
    return (
        <>
            <footer className="pt_100 xs_pt_80 bg-gradient-to-r from-blue-50 to-blue-100 ">
                <div className="container">
                    <div className="row pb_55">
                        <div className="col-lg-4 col-sm-12">
                            <div className="footer_contact">
                                <h4>Our Email</h4>
                                <p>
                                    <Link className='text-black' href="mailto:info@softvasion.com">
                                        info@softvasion.com
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="footer_contact">
                                <h4>Our Hotline</h4>
                                <p>
                                    <Link className='text-black' href="callto:+8801835158205">+8801835158205</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="footer_contact contact_with">
                                <h4>Social Media</h4>
                                <ul>
                                    <li>
                                        <Link href="https://www.facebook.com/softvasion">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.facebook.com/official.softvson">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.facebook.com/official.softvson">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.facebook.com/official.softvson">
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.facebook.com/official.softvson">
                                            <i className="fab fa-youtube" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer_body pt_75 pb_75 xs_pt_50 xs_pb_50">
                        <div className="row justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer_content xs_mb_50">
                                    <div className="footer_logo" href="https://www.softvson.com.bd">
                                        <Link className="navbar-brand text-center" href="/">
                                            {/* <h2 className="text-white orbitron-700">SoftVasion</h2> */}
                                            <img src="/assets/image/softvasion.svg" alt="" />
                                        </Link>
                                    </div>
                                    <p className="footer_description pt_40 sm_pt_20 sm_pb_20 text-black">
                                        SoftVasion is an IT service provider in Bangladesh. We offer all kinds of IT services and also provide 24-hour customer care service.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6 col-md-6 xs_mb_50">
                                <div className="footer_content">
                                    <h3 className='text-black'>Links</h3>
                                    <ul className="footer_link">
                                        <li>
                                            <Link href="/about.html">About Us</Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/package">
                                                Package List
                                            </Link>
                                        </li> */}
                                        {/* <li>
                                            <Link href="/team">
                                                Our Team
                                            </Link>
                                        </li> */}

                                        {/* <li>
                                            <Link href="/faq">FAQ</Link>
                                        </li> */}
                                        <li>
                                            <Link href="/contactus.html">
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service.html">Our Services</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6 col-md-6 xs_mb_50">
                                <div className="footer_content">
                                    <h3>Links</h3>
                                    <ul className="footer_link">
                                        {/* <li>
                                            <Link href="/about">About Us</Link>
                                        </li> */}
                                        <li>
                                            <Link href="/privecy-and-Policy.html">Privacy & Policy</Link>
                                        </li>
                                        <li>
                                            <Link href="/trams-and-Conditions.html">Terms & Conditions</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog.html">
                                                Latest Blog
                                            </Link>
                                        </li>

                                        {/* <li>
                                            <Link href="/portfolio">Projects</Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 xs_mb_30">
                                <div className="footer_content">
                                    <h3>Newsletter</h3>
                                    <p className="pb_20">
                                        Subscribe via email to stay connected and receive all our updates and offers.
                                    </p>
                                    <form
                                        action="https://www.softvson.com.bd/newsletter/store"
                                        method="POST"
                                    >
                                        <input
                                            type="hidden"
                                            name="_token"
                                            defaultValue="6GLWhog3f2nVD7jFOGyHSxsN6IsE26YLHl0rpXqG"
                                        />
                                        <div className="subscribe">
                                            <input
                                                type="email"
                                                name="email"
                                                className='!border-none focus:outline-none !font-serif'
                                                placeholder="Enter your email...."
                                            />
                                            <span>
                                                <i className="fas fa-envelope" />
                                            </span>
                                        </div>
                                        <button className="mt_25" type="submit">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom pt_45 pb_45 xs_pb_25">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5 m-auto">
                                <div className="copy">
                                    <p>© All rights reserved SoftVasion&nbsp;</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="footer_right_bottom">
                                    <div className="payment ml_30 xs_ml_0">
                                        <p className='text-black'>Payment via:</p>
                                        <div>
                                            <Link href="#">
                                                <img
                                                    src="/assets/image/payment.png"
                                                    alt="master-card"
                                                    className="img-fluid w-100"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}
