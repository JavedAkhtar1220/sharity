import React from 'react';
import imgMissionVideo from '../images/missionvideo.png';

const Mission = () => {
    return (
        <div className='mission-container' id='mission'>
            <h1 className='text-center fw-bold'>OUR MISSION</h1>
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-right">
                        <img src={imgMissionVideo} width={"100%"} height={"100%"} alt="video" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-left">
                        <h2 className='text-primary fw-bold'>To educate the next generation of investors and make financial well-being accessible to all.</h2>
                        <p className='pt-4'>Although digital currencies have been around for over a decade, we are still at an early stage of a monetary revolution that will reorganize our society, redistributing wealth and giving anyone a chance to attain financial freedom.</p>
                        <p className='pt-4'>The bulk of the next generation of investors is yet to join, but for global decentralized finance to become a reality they will need not only to overcome technological hurdles but to simply understand how money works. This is where SAITAMA comes in, providing tools and content that make people comfortable with money while they invest, opening unprecedented opportunities for wealth creation.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;
