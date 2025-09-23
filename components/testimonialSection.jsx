import React from 'react'
export default function testimonialSection() {
    return (
        <>
            <section
                className="home_2_testimonial pt_115 xs_pt_75 pb_120 xs_pb_80"
                style={{ background: "" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 m-auto">
                            <div className="section_heading">
                                <h3>Testimonials</h3>
                                <h2>What Our Clients Say</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row home_2_team_slider">
                        <TestimonialMember description="We are very impressed with every aspect of our new website. We had it created by SoftVasion, thank you." name="Fatema Akter" title="Entrepreneur" image="/assets/image/femail.png" color="#fff7ed" />

                        <TestimonialMember description="I am very happy to work with SoftVasion. They are very friendly and completed my project beautifully. Thank you SoftVasion." name="Khaled Mahmud" title="Manager" image="/assets/image/mail.png" color="#eff6ff" />

                        <TestimonialMember description="I created my new PTC site with SoftVasion and got exactly what I wanted. It was great, thanks to SoftVasion." name="Akbar Hossain" title="CEO" image="/assets/image/mail.png" color="#f0fdf4" />

                        <TestimonialMember description="I took SEO services for my website from them. After getting the service, my website traffic has increased significantly." name="Najmul Hasan" title="Executive Director" image="/assets/image/mail.png" color="#fdf2f8" />

                        <TestimonialMember description="Their work is amazing. Recently I had an e-commerce website created by SoftVasion. Thanks to SoftVasion." name="Nasir Sheikh" title="CEO" image="/assets/image/mail.png" color="#fefce8" />

                        <TestimonialMember description="I am very happy to work with SoftVasion. They are very helpful and their customer support is excellent." name="Zia Hasan" title="Co-CEO" image="/assets/image/mail.png" color="#f5f3ff" />
                    </div>
                </div>
            </section>

        </>
    )
}



export function TestimonialMember(props) {
    return (
        <>
            <div className="col-lg-4 wow fadeInUp" data-wow-duration="1s">
                <div className="my-3 p-4 rounded-4xl " style={{background:props.color}}> 
                    <div>
                        <img className='!w-[90px] !h-[90px]' src={props.image} alt="" />
                    </div>
                    <div className="!border-b-1 border-gray-300 py-3 px-2">
                        <p className='!text-gray-700'>{props.description}</p>
                    </div>
                    <div className='row items-center py-3 px-2'>
                        <div className='col-8'>
                            <h5 className='py-1 !text-gray-900'>{props.name}</h5>
                            <p className='py-1 !text-gray-700'>{props.title}</p>
                        </div>
                        <div className='col-4 '>
                            <div className='flex text-orange-500'>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}