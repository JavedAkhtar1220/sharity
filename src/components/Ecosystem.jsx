import React from 'react';
import imgEco1 from '../images/eco1.png';
import imgEco2 from '../images/eco2.png';
import imgEco3 from '../images/eco3.png';

const Ecosystem = () => {
    return (
        <div className='ecosystem-container' id='ecosystem'>
            <div className="container">
                <h2 className='fw-bold'>OUR ECOSYSTEM</h2>
                <h1 className='text-center mt-5'>The Sharity Token</h1>

                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-10 col-10 mx-auto">
                        <p className='mt-4 text-center h5'>Our token had a fair launch on the Ethereum (ERC-20) network on 31st of May of 2021. It is a medium for transactions and a monetary system on its own, with a smart coding that benefits loyal holders with rewards and protection from whales (big wallet holders) toxic actions.</p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-4 col-md-4 col-sm-10 col-10 px-2 mx-auto"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className='text-center'>
                            <img src={imgEco1} alt="Ecosystem" width={150} height={150} />
                            <h4 className='mt-4'>Passive Income System</h4>
                            <p className='mt-3'>2% of every transaction with $Sharity is deducted and redistributed to our pool of holders. It means that just by holding it you will see the number of tokens increasing automatically everyday as the community transacts.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-10 col-10 px-2 mx-auto"
                        data-aos="fade-right"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine">
                        <div className='text-center'>
                            <img src={imgEco2} alt="Ecosystem" width={150} height={150} />
                            <h4 className='mt-4'>Deflationary Currency</h4>
                            <p className='mt-3'>An additional 2% of the amount of all transactions is taken out of circulation, meaning that our token supply is constantly shrinking and making your $SAITAMA increase in value with time. We have already started with 49% of the supply burned.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-10 col-10 px-2 mx-auto"
                        data-aos="fade-right"
                        data-aos-offset="500"
                        data-aos-easing="ease-in-sine">
                        <div className='text-center'>
                            <img src={imgEco3} alt="Ecosystem" width={150} height={150} />
                            <h4 className='mt-4'>Anti-Whale Trap</h4>
                            <p className='mt-3'>Everyone is expected to make profit but we want profit to be for everyone. $SAITAMA is coded in a way that prevents big wallet holders (whales) from trying to manipulate the price in their favour or from dumping the token by selling out.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecosystem;
