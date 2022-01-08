import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import chart from '../images/chart.PNG';

const Ecosystem2 = () => {
    return (
        <div className='ecosystem2-container'>
            <div className="container">
                <h3 className=' fw-bold'>OUR ECOSYSTEM</h3>
                <h1 className='text-center fw-bold mt-4'>BURN PERCENTAGE</h1>
                <div className="row mt-4">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h2>Price</h2>
                        <div className='border rounded p-3 mt-3 d-flex justify-content-between align-items-center'>
                            <div>
                                <p className='arrow-container'>
                                    <ArrowUpwardIcon />
                                </p>
                            </div>
                            <div>
                                <p className='mb-0 h3'>$0.00000000</p>
                            </div>
                        </div>
                        <div className='mt-5 bg-dark p-4'>
                            <h4 className='text-white'>Holders</h4>
                            <hr className='text-white' />
                            <div className='text-white d-flex justify-content-between'>
                                <p className='text-white mb-0'>Volume</p>
                                <p className='text-white mb-0'>0</p>
                            </div>
                            <hr />
                            <div className='text-white d-flex justify-content-between'>
                                <p className='text-white mb-0'>Fully Diluted Market Cap	</p>
                                <p className='text-white mb-0'>$0.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">

                        <h2>Sharity price trend 24h</h2>
                        <img src={chart} alt="chart" className='mt-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecosystem2;
