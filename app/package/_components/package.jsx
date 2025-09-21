import Link from 'next/link'
import React from 'react'

export default function Package() {
    return (
        <>
            <section className="pricing pt_95 xs_pt_55 pb_120 xs_pb_80">
                <div className="container">
                    <div className="row">

                        {/* E-Commerce */}
                        <PackageComponents 
                        name="E-Commerce"
                        price="10000"
                        li1="Website in Laravel"
                        li2="100% Responsive"
                        li3="Free Webview App"
                        li4="Single or Multi-Vendor"
                        li5="Easy Checkout System"
                        li6="10GB BDIX Hosting"
                        li7="Free .com Domain"
                        link="/"
                        />

                         {/* Newspaper */}
                        <PackageComponents 
                        name="Newspaper"
                        price="8000"
                        li1="Website in Laravel"
                        li2="100% Responsive"
                        li3="Free Webview App"
                        li4="Reporter Management System"
                        li5="AdSense Friendly"
                        li6="10GB BDIX Hosting"
                        li7="Free .com Domain"
                        link="/"
                        />

                        {/* School Management */}
                        <PackageComponents 
                        name="School Management"
                        price="10000"
                        li1="Software in Laravel"
                        li2="Online Admission"
                        li3="Student Management System"
                        li4="Online Fees Payment"
                        li5="Online Result"
                        li6="10GB BDIX Hosting"
                        li7="Free .com Domain"
                        link="/"
                        />

                        {/* Shop Software */}
                        <PackageComponents 
                        name="Shop Software"
                        price="8000"
                        li1="Software in Laravel"
                        li2="Complete Inventory System"
                        li3="Order Management"
                        li4="Profit & Loss Calculation"
                        li5="Online POS System"
                        li6="10GB BDIX Hosting"
                        li7="Free .com Domain"
                        link="/"
                        />
                         {/* Courier */}
                        <PackageComponents 
                        name="Courier"
                        price="10000"
                        li1="Software in Laravel"
                        li2="Pickup Request System"
                        li3="Merchant Panel"
                        li4="Rider Panel"
                        li5="Online Tracking System"
                        li6="10GB BDIX Hosting"
                        li7="Free .com Domain"
                        link="/"
                        />
                         {/* Pharmacy */}
                        <PackageComponents 
                        name="Pharmacy"
                        price="10000"
                        li1="Software in Laravel"
                        li2="Complete Drug Inventory System"
                        li3="Expiry Notification Option"
                        li4="Profit & Loss Calculation<"
                        li5="Online POS System"
                        li6="10GB BDIX Hosting"
                        li7="Free .com Domain"
                        link="/"
                        /> 

                    </div>
                </div>
            </section>


        </>
    )
}


export const PackageComponents = (props) => {
    return (
        <>
            {/* E-Commerce */}
            <div className="col-xl-4 col-md-6 wow fadeInUp">
                <div className="single_pricing">
                    <h4>{props.name}</h4>
                    <h2>
                        ৳{props.price}
                        <span>/Delivery within 7 days</span>
                    </h2>
                    <ul>
                        <li>{props.li1}</li>
                        <li>{props.li2}</li>
                        <li>{props.li3}</li>
                        <li>{props.li4}</li>
                        <li>{props.li5}</li>
                        <li>{props.li6}</li>
                        <li>{props.li7}</li>
                    </ul>
                    <a href={props.link}>I Want This</a>
                </div>
            </div>
        </>
    )
}