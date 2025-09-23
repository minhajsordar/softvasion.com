import React from 'react'
import Link from 'next/link';

export default function Bannar() {
    return (
        <>
            {/* ====== Banner Section ====== */}
            <section className="banner !pb-0 ">
                <div className="container">
                    <div className="">
                        <div
                            className="w-full flex justify-center text-center wow fadeInLeft m-auto"
                            data-wow-duration="1s"
                        >
                            <div className="banner_content">
                                <h1 className="font-orbitron !font-normal text-4xl md-text-7xl">
                                    Creating The Future of Software Technology.
                                </h1>
                                <p className="py-4 text-md">
                                    Top Software Company in Bangladesh for Brands
                                </p>
                                <div className="banner_btn d-flex flex-wrap justify-center">
                                    <Link href="/contactus.html" className="common_btn btn btn-primary me-3">
                                        Get In Touch
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex wow fadeInRight pt-5"
                            data-wow-duration="1s"
                        >
                            {/* ====== Team / Stats Section ====== */}
                            <div className="team-section">
                                <div className="grid md:grid-cols-6 grid-cols-3 gap-4 items-end">
                                    {/* Image + Stat Example */}
                                    <div className="">
                                        <img
                                            src="/assets/image/image4.png"
                                            alt="talent"
                                            className="img-fluid rounded-tr-[150px]  !h-[260px]"
                                        />
                                    </div>
                                    <div className="">
                                        <div className="flex flex-col item-center justify-end p-2 text-center rounded-tr-[150px]  items-center w-100 !h-[200px]" style={{ backgroundColor: "#E0F2FE" }}>
                                            <h6 className="mb-2">Customer</h6>
                                            <h3 className="fw-bold">300+</h3>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="flex flex-col item-center justify-end p-2 text-center rounded-tl-[150px] items-center w-100 !h-[150px]" style={{ backgroundColor: "#FCE7F3" }}>
                                            <h6 className="mb-2">Projects</h6>
                                            <h3 className="fw-bold">500+</h3>
                                        </div>
                                    </div>
                                    <div className="" >
                                        <img
                                            src="/assets/image/image3.png"
                                            alt="project"
                                            className="img-fluid rounded-tr-[150px] !h-[150px]"
                                        />
                                    </div>


                                    <div className="">
                                        <div className="flex flex-col item-center justify-end p-2 text-center rounded-tl-[150px]  items-center w-100 !h-[200px] " style={{ backgroundColor: "#DCFCE7" }}>
                                            <h6 className="mb-2">Team</h6>
                                            <h3 className="fw-bold">50+</h3>
                                        </div>
                                    </div>
                                    <div className="">
                                        <img
                                            src="/assets/image/image6.jpg"
                                            alt="experience"
                                            className="img-fluid rounded-tl-[150px] !h-[250px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
