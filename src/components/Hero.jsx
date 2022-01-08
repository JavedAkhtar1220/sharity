import React from 'react';
import imgPlayIcon from '../images/play-icon.png'
import imgDollarIcon from '../images/dollar-icon.png'
import imgBookIcon from '../images/book-icon.png'
const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='hero-bottom'>
                <div className='d-flex align-items-center mx-3'>
                    <img src={imgPlayIcon} alt="Play icon" width={50} height={50} />
                    {/* <SlowMotionVideoRoundedIcon className="hb-icon" /> */}
                    <p className='ms-3 mb-0 fw-bold'>Watch the video</p>
                </div>
                <div className='d-flex align-items-center mx-3'>
                    <img src={imgDollarIcon} alt="Play icon" width={50} height={50} />

                    {/* <AttachMoneyRoundedIcon className="hb-icon" /> */}
                    <p className='ms-3 mb-0 fw-bold'>Buy $SHARITY</p>
                </div>
                <div className='d-flex align-items-center mx-3'>
                    <img src={imgBookIcon} alt="Play icon" width={50} height={50} />

                    {/* <AutoStoriesRoundedIcon className="hb-icon" /> */}
                    <p className='ms-3 mb-0 fw-bold'>Read the whitepaper</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-10 col-12" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h2 className='display-3 fw-bold'>SHARITY Token </h2>
                        <h3>A COIN WITH A CAUSE</h3>
                        <p className='mt-5 fw-bold'>
                            We aim to revolutionize the charity space and build a
                            bridge that connects the world with just one tap of a button.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
