import React from 'react'

export default function aboutSection() {
  return (
    <>
      <>
        {/*==============================
  ABOUT START
    ===============================*/}
        <section className="about pt_120 xs_pt_80  xs_pb_80 relative">

          <div className='absolute top-0 left-0'>
            <div className='w-18 h-18 bg-orange-100'></div>
            <div className='flex'>
              <div className='w-18 h-18 rounded-bl-full bg-purple-100'></div>
              <div className='w-18 h-18 rounded-tr-full bg-green-100'></div>
            </div>
          </div>
          <div className='absolute top-0 right-0 w-18 h-18 rounded-bl-full bg-blue-100'>
            <div className='absolute bottom-0 left-0 w-6 h-6 rounded-full bg-green-100'></div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1s">
                <div className="about_img_box">
                  <div className="small_img">
                    <img
                      src="/assets/image/image5.jpg"
                      alt="image"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="main_img">
                    <img
                      src="/assets/image/image7.jpg"
                      alt="image"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>

              </div>
              <div className="col-lg-6 wow fadeInRight relative" data-wow-duration="1s">
                <div className="section_heading pt_35">
                  <h3>About The Company</h3>
                  <h2>We Have 6 Years of Experience.</h2>
                </div>
                <div className="about_content">
                  <p />
                  <p>
                    SoftVasion is one of the most trusted and successful digital marketing agencies in Bangladesh, specializing in digital marketing, web design, web development, and website maintenance.
                    We provide the highest quality services at the most affordable cost.
                    Our wide range of services across Bangladesh is designed to eliminate limitations for our customers and support them in achieving their digital goals.
                  </p>
                  <div className="grid_item">
                    <div className="left">
                      <ul>
                        <li>Web Design & Development</li>
                        <li>Software Development</li>
                        <li>Graphics Design</li>
                        <li>Digital Marketing</li>
                      </ul>
                      <a
                        className="common_btn"
                        href="https://www.facebook.com/softvasion"
                      >
                        Free Consultation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==============================
  ABOUT END
    ===============================*/}
      </>

    </>
  )
}
