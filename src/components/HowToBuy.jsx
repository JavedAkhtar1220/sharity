import React from 'react'

const HowToBuy = () => {
    return (
        <div className='htb-container' id='htb'>
            <div className="container" data-aos="fade-right">
                <h1 className='fw-bold'>How to buy</h1>
                <ul className='mt-4'>
                    <li className="mt-3">
                        Launch uniswap app within your wallets browser.
                    </li>
                    <li className="mt-3">
                        Import token address ( 0x686c626E48bfC5DC98a30a9992897766fed4Abd3 )
                    </li>
                    <li className="mt-3">
                        Select eth as the token you want to swap from and Sharity as the token you want to swap to.
                    </li>
                    <li className="mt-3">
                        Slippage 7%
                    </li>
                </ul>
                <p className='mt-3'>Max wallet ⬅️(please put in bold) 249,000,000,000,000</p>
                <p className='mt-3'>Total supply 50 quad</p>

                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-10 col-12 mt-3">
                        (Please add this above white paper)
                        Reading the whitepaper should be prioritized before investing in a project. That's why we dedicated time creating this document, which has been reviewed by regulators, third-party audit firms and advisors, that includes legal and industry experts.
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-10 col-12 mt-3">
                        Liquidity lock
                        <br />
                        <a href="https://app.unicrypt.network/amm/uni-v2/pair/0x686c626E48bfC5DC98a30a9992897766fed4Abd3">https://app.unicrypt.network/amm/uni-v2/pair/0x686c626E48bfC5DC98a30a9992897766fed4Abd3</a>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-10 col-12 mt-3">
                        <p className='mt-3'>Locked for one year</p>
                        <br />
                        Dextools link <a href="https://www.dextools.io/app/ether/pair-explorer/0x686c626E48bfC5DC98a30a9992897766fed4Abd3">https://www.dextools.io/app/ether/pair-explorer/0x686c626E48bfC5DC98a30a9992897766fed4Abd3</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HowToBuy;
