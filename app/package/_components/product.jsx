import Link from 'next/link'
import React from 'react'

export default function Product() {
  return (
    <>
          <section className="shop pt_120 xs_pt_80 pb_120 xs_pb_80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1s">
                            <div className="single_shop">
                                <div className="single_shop_img">
                                    <img
                                        src="/assets/image/image1.jpg"
                                        alt="shop"
                                        className="img-fluid w-100"
                                    />
                                </div>
                                <div className="single_shop_text">
                                    <div className="header d-flex flex-wrap justify-content-between">
                                        <p>
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <b>(5.0)</b>
                                        </p>
                                        <span>৳300</span>
                                    </div>
                                    <Link
                                        className="title"
                                        href="/package"
                                    >
                                        700 Source Code Only 300TK
                                    </Link>
                                    <ul className="d-flex flex-wrap justify-content-between">
                                        <li>
                                            <Link href="/">
                                                এখুনি কিনুন
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                বিস্তারিত পড়ুন
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <nav aria-label="Page navigation example">
                                <nav>
                                    <ul className="pagination">
                                        <li
                                            className="page-item disabled"
                                            aria-disabled="true"
                                            aria-label="« Previous"
                                        >
                                            <span className="page-link" aria-hidden="true">
                                                ‹
                                            </span>
                                        </li>
                                        <li className="page-item active" aria-current="page">
                                            <span className="page-link">1</span>
                                        </li>
                                        <li className="page-item">
                                            <a
                                                className="page-link"
                                                href="https://www.creativedesign.com.bd/product?page=2"
                                            >
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a
                                                className="page-link"
                                                href="https://www.creativedesign.com.bd/product?page=2"
                                                rel="next"
                                                aria-label="Next »"
                                            >
                                                ›
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}
