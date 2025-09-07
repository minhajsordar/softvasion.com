import React from 'react'
import BradecumSection from './../bradecumSection';
import ContactFrom from './../../app/contactus/_ccomponents/contactFrom';

export default function contactusPage() {
  return (
    <>
        <BradecumSection images='https://www.creativedesign.com.bd/assets/frontend/images/breadcrumb_bg.jpg' title='আমাদের সাথে যোগাযোগ করুন' title2='যোগাযোগ' subtitle='হোম'/>
        <ContactFrom />
    </>
  )
}
