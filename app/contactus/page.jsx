import React from 'react'
import ContactusPage from './../../components/pages/contactusPage';
import ContactFrom from './_ccomponents/contactFrom';

export default function page() {
  return (
    <>
        <ContactusPage />
        <ContactFrom />
    </>
  )
}

export function generateMetadata (){
  return{
    title:"Softvasion | Contactus Page",
    description:"Softvasion is an IT service provider in Bangladesh. We have all types of IT services. We also have 24 hour customer care service."
  }
}