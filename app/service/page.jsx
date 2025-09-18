import React from 'react'
import ServicePgae from '../../components/pages/servicePage';
import ServiceSection from './_components/serviceSection';
import BradecumSection from './../../components/bradecumSection';

export default function page() {
  return (
    <>
            <BradecumSection
                images="/assets/image/image7.jpg"
                title="Our Service"
                title2="Service"
                subtitle="Home"
              />
        <ServicePgae />
        {/* <ServiceSection /> */}
    </>
  )
}

export function generateMetadata(){
  return{
    title:"Softvasion | Service Page",
    description:"Softvasion is an IT service provider in Bangladesh. We have all types of IT services. We also have 24 hour customer care service."
  }
}