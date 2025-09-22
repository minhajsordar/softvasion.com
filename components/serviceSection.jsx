import React from 'react'

export default function serviceSection() {
    return (
        <>
            <>
                <section className="services xs_mt_80 pt_115 xs_pt_75 pb_95 xs_pb_55">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 m-auto">
                                <div className="section_heading">
                                    <h3>Our Services</h3>
                                    <h2>High-Quality Services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <ServiceCard icon='fas fa-palette' number='01' title='Web Design & Development' description='Our web design & development packages start from 8,000 BDT' numberColor='!text-orange-950' buttonColor='!bg-orange-950' bgColor='!bg-orange-50' iconBg='bg-orange-200 rounded-tr-full'/>

                            <ServiceCard icon='fas fa-laptop' number='02' title='Software Development' description='Our software development packages start from 10,000 BDT' numberColor='!text-blue-950' buttonColor='!bg-blue-950' bgColor='bg-blue-50' iconBg='bg-blue-200 rounded-b-full'/>

                            <ServiceCard icon='fa fa-server' number='03' title='Domain, Hosting & Server' description='Our domain and hosting packages start from 3,000 BDT' numberColor='!text-green-950' buttonColor='!bg-green-900' bgColor='bg-green-50' iconBg='bg-green-200 rounded-l-full'/>

                            <ServiceCard icon='fa-brands fa-facebook' number='04' title='Social Media Marketing' description='Our social media marketing packages start from 2,000 BDT' numberColor='!text-pink-950' buttonColor='!bg-pink-950' bgColor='bg-pink-50' iconBg='bg-pink-200 rounded-r-full'/>

                        </div>
                    </div>
                </section>


            </>

        </>
    )
}



export const ServiceCard = (props) => {
    return (
        <>


            <div className="col-xl-3 col-md-6 col-lg-4 wow fadeInUp py-3" data-wow-duration="1s">
                <div className={`${props.bgColor} p-3  rounded-4xl`}>
                    <div className='flex justify-between py-4 px-3'>
                        <div className='!text-3xl text-black relative'>
                            <div className='absolute  left-[16px] top-[-15px] z-0'>
                                <div className={`w-10 h-10  ${props.iconBg}`}></div>
                            </div>
                            <div className='absolute z-10'>
                            <i className={props.icon} />
                            </div>
                        </div>
                        <div><h1 className={`!text-[120px] ${props.numberColor} !mr-[-24px]`}>{props.number}</h1></div>
                    </div>
                    <div className='p-3'>
                        <h2 className='!text-left !text-2xl !font-bold py-1'>{props.title}</h2>
                        <p className='py-1 !text-[14px]'>{props.description}</p>
                        <div className='pt-3'>
                            <a className={`p-2 px-4 rounded-3xl ${props.buttonColor}`} href="/">
                                <span className='!text-amber-50'>Learn More</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}