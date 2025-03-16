import React from 'react';

export default function Mp_0(){
    return(
        <>
        <div>
            <img className='container-fluid' src="/media_prod1.jpeg" alt="Media Production" />
        </div>
            <div className="row row-cols-1 shadow g-4 p-5">
                <div className="col ">
                    <div className="card h-100" style={{ border: 'none' }}>
                        <div className="card-body">
                            <h5 className="service_font card-title pb-2">Film Production</h5>
                            <img src="/filmprod.jpeg" height="200" width="100%" alt="Film Production" />
                            <p className=" service_font2 card-text text-left pt-3">Our film production house is committed to creating exceptional cinematic experiences, from the earliest stages of concept development to the final touches of post-production. With a team of skilled directors, writers, cinematographers, and editors, we bring your creative vision to life, ensuring each project, whether a short film or feature, is executed with artistry, precision, and passion.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100" style={{ border: 'none' }}>
                        <div className="card-body">
                            <h5 className=" service_font card-title pb-2">Music Video Production</h5>
                            <img src="/musicvideoprod.jpeg" height="200" width="100%" alt="Music Video Production" />
                            <p className=" service_font2 card-text text-left pt-3">At our music production house, we blend technical expertise with boundless creativity to produce high-quality soundtracks, jingles, and compositions across various genres. Our team of talented producers, musicians, and sound engineers work closely with clients to craft unique and powerful musical pieces, whether for film scores, commercials, albums, or multimedia projects, ensuring the sound elevates the storytelling experience."</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100" style={{ border: 'none' }}>
                        <div className=" card-body text-left">
                            <h5 className=" service_font card-title pb-2">Commercial Production</h5>
                            <img src="commercialprod.jpeg" height="200" width="100%" alt="Commercial Production" />
                            <p className="service_font2 card-text text-left pt-3">In our commercial production house, we specialize in producing high-impact, visually stunning advertisements that resonate with audiences and effectively convey your brand message. From concept and scriptwriting to shooting and post-production, our experienced team brings together creative vision, market insight, and technical expertise to produce commercials that engage, inspire, and drive measurable results for your business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}