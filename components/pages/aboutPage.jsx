import React from 'react'
import BradecumSection from './../bradecumSection';
import AboutSection from './../aboutSection';
import FeatureSection from './../featureSection';
import AchivementSection from './../achivementSection';
import ServiceSection from './../serviceSection';
import BrandSetion from './../brandSection';

export default function aboutPage() {
  return (
    <>
      <BradecumSection
        images="/assets/image/image6.jpg"
        title="About Us"
        subtitle="Home"
        title2='About Us'
      />

      <AboutSection />
      <FeatureSection />
      <AchivementSection />
      <ServiceSection />
      {/* <BrandSetion /> */}
    </>
  )
}
