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
