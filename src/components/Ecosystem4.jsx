import React from 'react';
import img1 from '../images/eco4-1.png';
import img2 from '../images/eco4-2.png';
import img3 from '../images/eco4-3.png';

const Ecosystem4 = () => {
    return (
        <div className='ecosystem4-container'>
            <div className="container">
                <h3 className='text-white fw-bold'>OUR ECOSYSTEM</h3>
                <h1 className='text-center text-white fw-bold mt-4'>Saita Mask</h1>
                <p className='text-center text-white mt-4'>A smart wallet that revolutionises the cryptocurrency market by solving fundamental problems in decentralized finance, allowing investors from any level to be in control of their wealth.</p>

                <div className="row mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 px-3">
                            <div className="text-center">
                                <img src={img1} alt="ecosystem" width={'100%'} />
                                <p className='text-white mt-5'>
                                    New investors normally have to go through several steps, especially when buying new coins that are not yet listed in exchanges. They often feel discouraged from starting in decentralized finance (DeFi) and eventually forced to turn to intermediates or centralized operators (CeFi) where they are more limited and subject to private interests and higher taxes.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 px-3">
                            <div className="text-center">
                                <img src={img2} alt="ecosystem" width={'100%'} />
                                <p className='text-white mt-5'>
                                    SaitaMask solves this problem by being a one stop shop where you can connect your payment system of choice and be able to buy, sell, swap, transfer and do whatever you need with any coin without leaving the mobile app. You will also be able to analyse your investments using multiple tools that help to make decisions and keep track of your Saitama rewards.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 px-3">
                            <div className="text-center">
                                <img src={img3} alt="ecosystem" width={'100%'} />
                                <p className='text-white mt-5'>
                                    SaitaMask will also serve as a hub connecting users to the Saitama Edutainment platform, meaning they will be learning about finance and improving their skills while investing. The SaitaMask will also be connected to SaitaMaker and SaitaMarket, helping users to buy and sell items with crypto inside the app.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecosystem4;
