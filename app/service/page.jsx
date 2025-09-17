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
