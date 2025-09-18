import React from 'react'
import AboutPage from './../../components/pages/aboutPage';


export default function Page() {
  return (
    <>
      <AboutPage />
    </>
  )
}

// export function generateMetadata({ params }) {
//   return {
//     title: 'SoftVasion | About Page',
//     description: 'Softvasion is an IT service provider in Bangladesh. We have all types of IT services. We also have 24 hour customer care service.'
//   }
// }

export function generateMetadata() {
  return {
    title: 'SoftVasion | About Page',
    description: 'Softvasion is an IT service provider in Bangladesh. We have all types of IT services. We also have 24 hour customer care service.'
  }
}