import React from 'react'

export default function bradecumSection({images="", title="", title2="", subtitle=""}) {
    return (
        <>
            <>
                {/*============================
  BREADCRUMB START
    =============================*/}
                <section
                    className="breadcrumb_area"
                    style={{ background:`url(${images})` }}
                >
                    <div className="breadcrumb_overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="breadcrumb_text ">
                                        <h1 className='orbitron-700'>{title}</h1>
                                        <ul>
                                            <li>
                                                <a className='orbitron-700' href="#">{subtitle}</a>
                                            </li>
                                            <li>
                                                <a className='orbitron-700' href="#">{title2}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*============================
  BREADCRUMB END
    =============================*/}
            </>

        </>
    )
}
