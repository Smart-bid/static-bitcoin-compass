import React from 'react'
import bbb from './img/bbb_logo.png'
import mcafee from './img/mcafee_logo.png'
import norton from './img/norton_logo.png'
import truste from './img/truste_logo.png'
import btcCoin from './img/btc.svg'

const Partners = () => {
    return (
        <div className='Partners'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-7">
                        <div className="partners-img">
                            <img src={norton} alt="" className="img-responsive"/>
                            <img src={mcafee} alt="" className="img-responsive"/>
                            <img src={truste} alt="" className="img-responsive"/>
                            <img src={bbb} alt="" className="img-responsive"/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="btc-title">
                            <h4>BTC price</h4>
                            <div className="flex">
                                <div className="left">
                                    <div className="animated-coin">
                                        <img src={btcCoin} alt=""/>
                                    </div>
                                    <span>
                                        01/2017
                                    </span>
                                    <strong>13.96</strong>
                                </div>
                                <div className="right">
                                    <span>01/20</span>
                                    <strong className="price">$8631</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Partners;