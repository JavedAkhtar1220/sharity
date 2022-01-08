import React from 'react';
import img from '../images/coming.jpg';



const Ecosystem3 = () => {
    return (
        <div className='ecosystem3-container' id='sharity'>

            <h1>Mobile Version</h1>
            <img src={img} className='img-fluid mt-5' alt="Coming soon" />
            {/* <div className='eco3-bottom'>
                <div className='mx-3 d-flex align-items-center'>
                    <img src={imgPlayIcon} alt="play icon" width={100} />
                    <p className='text-white ms-3 mb-0'>Watch the video</p>

                </div>
                <div className='mx-3'>
                    <img src={appStore} alt="app store" width={200} />
                </div>
                <div className='mx-3'>
                    <img src={playStore} alt="play store" width={200} />
                </div>

            </div> */}
        </div>
    )
}

export default Ecosystem3;
