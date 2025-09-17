import React from 'react'
import BlogSection from './_components/blogSection';
import BradecumSection from './../../components/bradecumSection';
export default function page() {
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
