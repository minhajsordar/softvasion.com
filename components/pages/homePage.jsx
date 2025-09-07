import React from 'react'
import BrandSection from './../brandSection';
import AboutSection from './../aboutSection';
import FeatureSection from './../featureSection';
import AchivementSection from './../achivementSection';
import TestimonialSection from './../testimonialSection';
import ServiceSection from './../serviceSection';
export default function homePage() {
  return (
    <>

  {/*==============================
  BANNER START
    ===============================*/}
  <section
    className="banner"
    style={{
      background:
        "url(https://www.creativedesign.com.bd/assets/front/img/17361026461740401592.jpg) no-repeat center/cover"
    }}
  >
    <div className="container">
      <div className="row">
        <div
          className="col-xl-6 col-lg-6 wow fadeInLeft"
          data-wow-duration="1s"
        >
          <div className="banner_content">
            <h3>৬ বছরের বাস্তব অভিজ্ঞতা</h3>
            <h1>Creating New Ideas for Your Business</h1>
            <p className="description">
              আমাদের কাছ থেকে মাত্র 8000TK দিয়ে আপনার স্বপ্নের ওয়েবসাইট তৈরি
              করুন। আমরা Laravel দিয়ে আপনার ওয়েবসাইট তৈরি করব। আপনার ওয়েবসাইট
              হবে 100% প্রতিক্রিয়াশীল এবং নিরাপদ।
            </p>
            <div className="banner_btn d-flex flex-wrap">
              <a
                href="https://www.creativedesign.com.bd/gate-a-quote"
                className="common_btn"
              >
                ফ্রি কনসালটেশন
              </a>
              <a
                className="venobox play_btn"
                data-autoplay="true"
                data-vbtype="video"
                href="https://youtu.be/#"
              >
                <i className=" fas fa-play" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-6 col-lg-6 wow fadeInRight"
          data-wow-duration="1s"
        >
          <div className="banner_img">
            <img
              src="https://www.creativedesign.com.bd/assets/front/img/17361014651911523454.png"
              alt="banner-img"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
  BANNER END
    ===============================*/}
  {/*==============================
  ABOUT START
    ===============================*/}
<AboutSection />
  {/*==============================
  ABOUT END
    ===============================*/}
  {/*==============================
  FEATURES START
    ===============================*/}
 <FeatureSection />
  {/*==============================
  FEATURES END
    ===============================*/}
  {/*==============================
  ACHIEVEMENTS START
    ===============================*/}
  <AchivementSection />
  {/*==============================
  ACHIEVEMENTS END
    ===============================*/}
  {/*==============================
  PROJECTS START
    ===============================*/}
 
  {/* PROJECTS END */}
  {/* SERVICES START */}
  <ServiceSection />
  {/* SERVICES END */}
  {/* TEAM START */}
  <section className="home_2_team pt_115 xs_pt_75 pb_120 xs_pb_80">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="section_heading pb_20">
            <h3>আমাদের টিম</h3>
            <h2>আমাদের সকল টিম মেম্বাদেরকে দেখুন</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "fadeInUp"
          }}
        >
          <div className="home_2_team_item">
            <div className="image">
              <span>
                <img
                  src="https://www.creativedesign.com.bd/assets/front/img/team/17384272841396583989.png"
                  alt="image"
                  className="img-fluid w-100"
                />
              </span>
            </div>
            <div className="text">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="#" />
                  </a>
                </li>
              </ul>
              <a
                className="link"
                href="https://www.creativedesign.com.bd/team/7"
              >
                Md Nazrul Islam (Sayed)
              </a>
              <p>CEO</p>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "fadeInUp"
          }}
        >
          <div className="home_2_team_item">
            <div className="image">
              <span>
                <img
                  src="https://www.creativedesign.com.bd/assets/front/img/team/1738426713884183570.png"
                  alt="image"
                  className="img-fluid w-100"
                />
              </span>
            </div>
            <div className="text">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="#" />
                  </a>
                </li>
              </ul>
              <a
                className="link"
                href="https://www.creativedesign.com.bd/team/5"
              >
                Md Mizanur Rahman
              </a>
              <p>Manager</p>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "fadeInUp"
          }}
        >
          <div className="home_2_team_item">
            <div className="image">
              <span>
                <img
                  src="https://www.creativedesign.com.bd/assets/front/img/team/1738426574413867008.png"
                  alt="image"
                  className="img-fluid w-100"
                />
              </span>
            </div>
            <div className="text">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
              <a
                className="link"
                href="https://www.creativedesign.com.bd/team/6"
              >
                Md Nayeem Hossain
              </a>
              <p>Web Designer</p>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "fadeInUp"
          }}
        >
          <div className="home_2_team_item">
            <div className="image">
              <span>
                <img
                  src="https://www.creativedesign.com.bd/assets/front/img/team/1738428069694123271.png"
                  alt="image"
                  className="img-fluid w-100"
                />
              </span>
            </div>
            <div className="text">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
              <a
                className="link"
                href="https://www.creativedesign.com.bd/team/4"
              >
                Md Rakibul Islam (Rubel)
              </a>
              <p>Graphics Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* TEAM END */}
  {/* TESTIMONIAL START*/}
          <TestimonialSection />
  {/*TESTIMONIAL END*/}

    
    {/* <BrandSection /> */}
 

  {/* SCROLL BUTON START */}
  <div className="scroll_btn">
    <i className="fas fa-chevron-up" />
  </div>
</>

  )
}
