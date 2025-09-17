import React from 'react'
import Link from 'next/link';

export default function Bannar() {
    return (
        <>
            {/* ====== Banner Section ====== */}
            <section className="banner py-5">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-6 col-lg-6 wow fadeInLeft m-auto"
                            data-wow-duration="1s"
                        >
                            <div className="banner_content">
                                <h1 className="font-orbitron !font-normal text-4xl md-text-7xl">
                                    Creating The Future of Software Technology.
                                </h1>
                                <p className="description texxt-md">
                                    Top Software Company in Bangladesh for Brands
                                </p>
                                <div className="banner_btn d-flex flex-wrap">
                                    <Link href="/contactus" className="common_btn btn btn-primary me-3">
                                        Get In Touch
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-xl-6 col-lg-6 wow fadeInRight pt-5"
                            data-wow-duration="1s"
                        >
                            {/* ====== Team / Stats Section ====== */}
                            <div className="team-section">
                                <div className="row g-4">
                                    {/* Image + Stat Example */}
                                    <div className="col-6 w-[200] h-[160px]">
                                        <img
                                            src="/assets/image/image4.png"
                                            alt="talent"
                                            className="img-fluid rounded-tl-[60px] shadow "
                                        />
                                    </div>
                                    <div className="col-6 w-[200] h-[160px]">
                                        <div className="p-5 text-center rounded-bl-[60px]  shadow items-center w-100 h-[150px]" style={{ backgroundColor: "#E0F2FE" }}>
                                            <h6 className="mb-2">Satisfied Customer</h6>
                                            <h3 className="fw-bold">300+</h3>
                                        </div>
                                    </div>

                                    <div className="col-6 w-[200] h-[160px]">
                                        <div className="p-5 text-center rounded-br-[60px]   shadow items-center w-100 h-[150px]" style={{ backgroundColor: "#FCE7F3" }}>
                                            <h6 className="mb-2">Complete Projects</h6>
                                            <h3 className="fw-bold">500+</h3>
                                        </div>
                                    </div>
                                    <div className="col-6  w-[200] h-[150px]" >
                                        <img
                                            src="/assets/image/image3.png"
                                            alt="project"
                                            className="img-fluid rounded-tr-[60px] shadow"
                                        />
                                    </div>

                                    <div className="col-6  w-[200] h-[150px]">
                                        <img
                                            src="/assets/image/image6.jpg"
                                            alt="experience"
                                            className="img-fluid rounded-tl-[60px]  shadow"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <div className="p-5 text-center rounded-bl-[60px]  shadow items-center w-100 h-[150px] " style={{ backgroundColor: "#DCFCE7" }}>
                                            <h6 className="mb-2">Support Team</h6>
                                            <h3 className="fw-bold">50+</h3>
                                        </div>
                                    </div>

                                    {/* <div className="col-6">
                                        <div className="p-4 text-center rounded-4 shadow" style={{ backgroundColor: "#EDE9FE" }}>
                                            <h6 className="mb-2">Tech Stack</h6>
                                            <h3 className="fw-bold">20+</h3>
                                        </div>
                                    </div>
                                    <div className="col-6  w-[200] h-[150px]">
                                        <img
                                            src="/assets/image/image4.png"
                                            alt="tech"
                                            className="img-fluid rounded-4 shadow"
                                        />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
