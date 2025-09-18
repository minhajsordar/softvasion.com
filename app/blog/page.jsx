import React from 'react'
import BlogSection from './_components/blogSection';
import BradecumSection from './../../components/bradecumSection';
export default function Page() {
  return (
    <>
           <BradecumSection
                images="/assets/image/image6.jpg"
                title="Blogs"
                subtitle="Home"
                title2='blog'
              />
        <BlogSection/>
    </>
  )
}


export function generateMetadata(){
  return{
    title:"Softvasion | Blog Page",
    description:"Softvasion is an IT service provider in Bangladesh. We have all types of IT services. We also have 24 hour customer care service."
  }
}