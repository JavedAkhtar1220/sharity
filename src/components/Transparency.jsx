import React from 'react';
import imgLogo from '../images/sharity.png';

const Transparency = () => {
    return (
        <div className='transparency-container' id='transparency'>
            <div className="container">
                <h1 className='text-center fw-bold'>TRANSPARENCY</h1>
                <div className="text-center mt-5" >
                    <img src={imgLogo} alt="Sharity" className='img-fluid' />
                </div>
                <div className="row mt-5">
                    <div className="col-lg-8 col-md-8 col-sm-10 col-10 mx-auto" data-aos="zoom-in-down">
                        <p className='h4 text-center'>
                            WE BELIEVE TRANSPARENCY IS A KEY FACTOR FOR THE SUCCESS AND LONGEVITY OF OUR PROJECT AND THEREFORE WE ARE COMMITTED TO A SERIES OF MEASURES AIMED AT MAKING SAITAMA THE MOST TRANSPARENT PROJECT IN THE ALT-CRYPTO MARKET.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transparency;
