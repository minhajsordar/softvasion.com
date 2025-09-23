import React from 'react'
import ProducstPage from '../../components/pages/productsPage';
import ShiopSection from './_components/shopSection';

export default function page() {
  return (
    <>
        <ProducstPage />
        <ShiopSection />    
    </>
  )
}


export function generateMetadata(){
  return{
    title:"SoftVasion | Product Page",
    description:"Softvasion is an IT service provider in Bangladesh. We have all types of IT services. We also have 24 hour customer care service."
  }
}