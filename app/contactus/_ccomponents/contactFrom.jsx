import React from 'react'

export default function contactFrom() {
    return (
        <>
            <section className="contact mt_120 xs_mt_80 mb_120 xs_mb_80">
                <div className="container">
                    <div className="contact_form_area">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 wow fadeInUp" data-wow-duration="1s">
                                <div className="contact_info_area">
                                    <div className="contact_info">
                                        <h3>হটলাইন নাম্বার</h3>
                                        <p>+8801849832178</p>
                                    </div>
                                    <div className="contact_info">
                                        <h3>ইমেইল এড্রেস</h3>
                                        <p>info@creativedesign.com.bd</p>{" "}
                                    </div>
                                    <div className="contact_info border-0 p-0 m-0">
                                        <h3>অফিস এর ঠিকানা</h3>
                                        <p>অফিস :৩৫/৩/১, নছের মার্কেট,কোনাবাড়ী, গাজিপুর-১৭৪৩,ঢাকা</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 wow fadeInUp" data-wow-duration="1s">
                                <form className="contact_form">
                                    <h3>যোগাযোগ করতে নিচের ফরম পূরণ করুন</h3>
                                    <input
                                        type="hidden"
                                        name="_token"
                                        defaultValue="6GLWhog3f2nVD7jFOGyHSxsN6IsE26YLHl0rpXqG"
                                    />{" "}
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="contact_form_input">
                                                <span>
                                                    <i className="fas fa-user" />
                                                </span>
                                                <input type="text" name="name" placeholder="আপনার নাম" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="contact_form_input">
                                                <span>
                                                    <i className="fas fa-envelope" />
                                                </span>
                                                <input type="email" name="email" placeholder="ইমেইল" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="contact_form_input">
                                                <span>
                                                    <i className="fas fa-phone-alt" />
                                                </span>
                                                <input type="text" name="phone" placeholder="মোবাইল" />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="contact_form_input">
                                                <span>
                                                    <i className="fas fa-book" />
                                                </span>
                                                <input type="text" name="subject" placeholder="সাবজেক্ট" />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="contact_form_input textarea">
                                                <span>
                                                    <i className="fas fa-pen" />
                                                </span>
                                                <textarea
                                                    rows={5}
                                                    name="message"
                                                    placeholder="ম্যাসেজ"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <button className="common_btn mt_15" type="submit">
                                                সেন্ড ম্যাসেজ
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="contact_map_area">
                        <div className="row mt_120 xs_mt_80">
                            <div className="col-12 wow fadeInUp" data-wow-duration="1s">
                                <div className="contact_map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993207.564767118!2d-77.9807899414373!3d42.92219345357043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1569310771254!5m2!1sen!2sbd"
                                        width={600}
                                        height={450}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
