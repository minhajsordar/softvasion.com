import React from 'react'

export default function blogSection() {
    return (
        <>
            <section className="blog pt_115 xs_pt_75 pb_115 xs_pb_75">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-xl-8 m-auto">
                            <div className="section_heading pb_20">
                                <h3>আমাদের সর্বশেষ খবর এবং ব্লগ পড়ুন</h3>
                                <h2>লেটেস্ট ব্লগ সমূহ</h2>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        <div
                            className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
                            data-wow-duration="1s"
                        >
                            <div className="single_blog">
                                <div className="single_blog_img h-45 rounded-bl-4xl">
                                    <img
                                        src="/assets/image/image6.jpg"
                                        alt="blog"
                                        className="img-fluid w-100"
                                    />
                                </div>
                                <div className="single_blog_text">
                                    <ul>
                                        <li>
                                            <i className="far fa-user-circle" />
                                            বাই এডমিন
                                        </li>
                                        <li>
                                            <i className="fal fa-calendar-alt" />
                                            15 Jan, 2025
                                        </li>
                                    </ul>
                                    <a
                                        className="title"
                                        href="/blog"
                                    >
                                        ক্রিয়েটিভ এজেন...
                                    </a>
                                    <p>আপনি কি একজন ব্যস্ত উদ্যোক্তা? আপনি কি আপনার ব...</p>
                                    <a
                                        className="more_btn"
                                        href="/blog"
                                    >
                                        বিস্তারিত পড়ুন <i className="far fa-chevron-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
                            data-wow-duration="1s"
                        >
                            <div className="single_blog">
                                <div className="single_blog_img h-45 rounded-tl-4xl">
                                    <img
                                        src="/assets/image/image4.png"
                                        alt="blog"
                                        className="img-fluid w-100"
                                    />
                                </div>
                                <div className="single_blog_text">
                                    <ul>
                                        <li>
                                            <i className="far fa-user-circle" />
                                            বাই এডমিন
                                        </li>
                                        <li>
                                            <i className="fal fa-calendar-alt" />
                                            15 Jan, 2025
                                        </li>
                                    </ul>
                                    <a
                                        className="title"
                                        href="/blog"
                                    >
                                        সোশ্যাল মিডিয়া...
                                    </a>
                                    <p>সোশ্যাল মিডিয়া ম্যানেজার: বাংলাদেশসহ সারাবি�...</p>
                                    <a
                                        className="more_btn"
                                        href="/blog"
                                    >
                                        বিস্তারিত পড়ুন <i className="far fa-chevron-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
                            data-wow-duration="1s"
                        >
                            <div className="single_blog">
                                <div className="single_blog_img h-45 rounded-br-4xl">
                                    <img
                                        src="/assets/image/image5.jpg"
                                        alt="blog"
                                        className="img-fluid w-100"
                                    />
                                </div>
                                <div className="single_blog_text">
                                    <ul>
                                        <li>
                                            <i className="far fa-user-circle" />
                                            বাই এডমিন
                                        </li>
                                        <li>
                                            <i className="fal fa-calendar-alt" />
                                            15 Jan, 2025
                                        </li>
                                    </ul>
                                    <a
                                        className="title"
                                        href="/blog"
                                    >
                                        UI &amp; UX ডিজাইন ও ক্য...
                                    </a>
                                    <p>ইউজার ইন্টারফেস&nbsp; হল সেই বিন্দু যেখানে ব্যবহ...</p>
                                    <a
                                        className="more_btn"
                                        href="/blog"
                                    >
                                        বিস্তারিত পড়ুন <i className="far fa-chevron-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
