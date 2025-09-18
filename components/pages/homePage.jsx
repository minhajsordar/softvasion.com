import React from 'react'
import BrandSection from './../brandSection';
import AboutSection from './../aboutSection';
import FeatureSection from './../featureSection';
import AchivementSection from './../achivementSection';
import TestimonialSection from './../testimonialSection';
import ServiceSection from './../serviceSection';
import Bannar from '../bannar';
import TeamMember from '../teamMember';
export default function homePage() {
  return (
    <>

  {/*==============================
  BANNER START
    ===============================*/}
 <Bannar />
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
    {/* <TeamMember /> */}
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
