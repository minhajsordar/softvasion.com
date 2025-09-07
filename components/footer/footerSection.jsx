import React from 'react'

export default function footerSection() {
    return (
        <>
            <footer className="pt_100 xs_pt_80">
                <div className="container">
                    <div className="row pb_55">
                        <div className="col-lg-4 col-sm-12">
                            <div className="footer_contact">
                                <h4>আমাদের ইমেইল</h4>
                                <p>
                                    <a href="mailto:info@creativedesign.com.bd">
                                        info@creativedesign.com.bd
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="footer_contact">
                                <h4>আমাদের হটলাইন</h4>
                                <p>
                                    <a href="callto:+8801849832178">+8801849832178</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="footer_contact contact_with">
                                <h4>সোশ্যাল মিডিয়া</h4>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/official.creativedesign">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/official.creativedesign">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/official.creativedesign">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/official.creativedesign">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/official.creativedesign">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer_body pt_75 pb_75 xs_pt_50 xs_pb_50">
                        <div className="row justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer_content xs_mb_50">
                                    <a
                                        className="footer_logo"
                                        href="https://www.creativedesign.com.bd"
                                    >
                                        <img
                                            src="https://www.creativedesign.com.bd/assets/front/img/footer_logo17368777782046431399.png"
                                            alt="Creative Design |  ক্রিয়েটিভ ডিজাইন"
                                            className="img-fluid w-100"
                                        />
                                    </a>
                                    <p className="footer_description pt_40 sm_pt_20 sm_pb_20">
                                        ক্রিয়েটিভ ডিজাইন বাংলাদেশের একটি আইটি সেবা প্রদানকারী
                                        প্রতিষ্ঠান। আমাদের সব ধরনের আইটি সেবা আছে। এছাড়াও রয়েছে 24
                                        ঘন্টা কাস্টমার কেয়ার সার্ভিস।
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6 col-md-6 xs_mb_50">
                                <div className="footer_content">
                                    <h3>লিঙ্ক</h3>
                                    <ul className="footer_link">
                                        <li>
                                            <a href="https://www.creativedesign.com.bd/package">
                                                প্যাকেজ লিস্ট
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.creativedesign.com.bd/team">
                                                আমাদের টিম
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.creativedesign.com.bd/blog">
                                                লেটেস্ট ব্লগ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.creativedesign.com.bd/faq">এফএকিউ</a>
                                        </li>
                                        <li>
                                            <a href="https://www.creativedesign.com.bd/contact">
                                                যোগাযোগ করুন
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6 col-md-6 xs_mb_50">
                                <div className="footer_content">
                                    <h3>লিঙ্ক</h3>
                                    <ul className="footer_link">
                                        <li>
                                            <a href="/about">আমাদের সম্পর্কে</a>
                                        </li>
                                        <li>
                                            <a href="/Privecy-&-Policy">প্রাইভেসি অ্যান্ড পলিসি</a>
                                        </li>
                                        <li>
                                            <a href="/Trams-&-Conditions">ট্রামস অ্যান্ড কন্ডিশন</a>
                                        </li>
                                        <li>
                                            <a href="/service">আমাদের সার্ভিস</a>
                                        </li>
                                        <li>
                                            <a href="/portfolio">প্রজেক্ট সমূহ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 xs_mb_30">
                                <div className="footer_content">
                                    <h3>নিউজলেটার</h3>
                                    <p className="pb_20">
                                        আমাদের সকল আপডেট অফার পেতে, আমাদের সাথে কানেক্ট থাকতে ইমেইল এর
                                        মাধ্যমে সাবস্ক্রাইব করুন।
                                    </p>
                                    <form
                                        action="https://www.creativedesign.com.bd/newsletter/store"
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
                                                placeholder="Enter your email...."
                                            />
                                            <span>
                                                <i className="fas fa-envelope" />
                                            </span>
                                        </div>
                                        <button className="mt_25" type="submit">
                                            সাবস্ক্রাইব করুন
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom pt_45 pb_45  xs_pb_25">
                        <div className="row ">
                            <div className="col-xl-6 col-lg-5">
                                <div className="copy">
                                    <p></p>
                                    <p>© সকল কিছুর স্বত্বাধিকার ক্রিয়েটিভ ডিজাইন&nbsp;</p>
                                    <p />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="footer_right_bottom">
                                    <div className="payment ml_30 xs_ml_0">
                                        <p>পেমেন্ট বাই :</p>
                                        <div>
                                            <a href="#">
                                                <img
                                                    src="https://www.creativedesign.com.bd/assets/frontend/images/payment.png"
                                                    alt="master-card"
                                                    className="img-fluid w-100"
                                                />
                                            </a>
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
