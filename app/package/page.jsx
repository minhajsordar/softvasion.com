import React from 'react'
import Product from './_components/product'
import BradecumSection from './../../components/bradecumSection';

export default function page() {
    return (
        <>
            <BradecumSection
                images="/assets/image/image6.jpg"
                title="Shop"
                subtitle="Home"
            />
            /<Product />

        </>
    )
}

export function generateMetadata (){
    return{
        title:"Softvasion | Package Page",
        description:"Softvasion is an IT service provider in Bangladesh. We have all types of IT services. We also have 24 hour customer care service."
    }
}