import React from 'react'

export default function topHeader() {
    return (
        <>
            {/*  HEADER START */}

            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-md-8 d-none d-md-block">
                            <ul className="header_info d-flex flex-wrap">
                                <li>
                                    <a href="callto:+8801835158205">
                                        {" "}
                                        <i className="fas fa-phone-alt" />
                                        +8801835158205
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@softvasion.com.bd">
                                        <i className="fas fa-envelope" />
                                        info@softvasion.com.
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <ul className="header_icon d-flex flex-wrap">
                                <li>
                                    <a href="https://www.facebook.com/softvasion">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.x.com/softvasion">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagrm.com/softvasion">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/softvasion">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/softvasion">
                                        <i className="fab fa-youtube" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            {/*  HEADER END  */}
        </>
    )
}
