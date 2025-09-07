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
        <BradecumSection images='https://www.creativedesign.com.bd/assets/frontend/images/breadcrumb_bg.jpg' title='আমাদের সম্পর্কে' subtitle='হোম'/>
        <AboutSection />
        <FeatureSection />
        <AchivementSection />
        <ServiceSection />
        <BrandSetion />
    </>
  )
}
