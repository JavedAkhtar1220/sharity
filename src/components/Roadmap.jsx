import React from 'react';
import imgRoadmap from '../images/roadmap.png';

const Roadmap = () => {
    return (
        <div className='roadmap-container' id='roadmap'>
            <div className="container" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <h1 className='fw-bold text-center mb-5'>ROAD MAP</h1>

                <img src={imgRoadmap} alt="Roadmap" />
            </div>
        </div>
    )
}

export default Roadmap
