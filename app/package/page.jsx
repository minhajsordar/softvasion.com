import React from 'react'
import Package from './_components/package'
import BradecumSection from './../../components/bradecumSection';

export default function page() {
    return (
        <>
            <BradecumSection
                images="/assets/image/image6.jpg"
                title="Package"
                subtitle="Home"
                title2='Package'
            />
            /<Package />

        </>
    )
}

export function generateMetadata (){
    return{
        title:"SoftVasion | Package Page",
        description:"Softvasion is an IT service provider in Bangladesh. We have all types of IT services. We also have 24 hour customer care service."
    }
}