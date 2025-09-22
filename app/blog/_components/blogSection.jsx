import React from 'react'
import { Image } from 'next/image';

export default function blogSection() {
    const blogs = [
        {
            Image: '/assets/image/image6.jpg',
            date: '15 Jan, 2025',
            title: 'Creative Agency...',
            description: 'Are you a busy entrepreneur? Do you want your b...',
            link: '/blog'
        },
        {
            Image: '/assets/image/image6.jpg',
            date: '15 Jan, 2025',
            title: 'Creative Agency...',
            description: 'Are you a busy entrepreneur? Do you want your b...',
            link: '/blog'
        }
    ]
    return (
        <>
            <section className="blog pt_115 xs_pt_75 pb_115 xs_pb_75">
                <div className="container">

                    <div className="row">
                        {
                            blogs.map((blog) => (
                                <BlogCard
                                    key={blog.id}
                                    Image={blog.Image}
                                    date={blog.date}
                                    title={blog.title}
                                    description={blog.description}
                                    link={blog.link}
                                />
                            ))}


                    </div>
                </div>
            </section>
        </>
    )
}


export const BlogCard = (props) => {
    return (
        <>

            <div
                className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
                data-wow-duration="1s"
            >
                <div className="single_blog">
                    <div className="single_blog_img !h-50 !rounded-xl">
                        <img
                            src={props.Image}
                            alt="blog"
                            className="img-fluid w-100"
                        />
                    </div>
                    <div className="single_blog_text">
                        <ul>
                            <li>
                                <i className="fas fa-calendar-alt" />
                                <span>{props.date}</span>
                            </li>
                        </ul>
                        <a
                            className="title "
                            href="/blog"
                        >
                            {props.title}
                        </a>
                        <p>{props.description}</p>
                        <a
                            className="more_btn"
                            href={props.link}
                        >
                            Read More <i className="fas fa-chevron-right" />
                        </a>
                    </div>
                </div>
            </div>


        </>
    )
}