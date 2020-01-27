import React, { Component } from 'react'
import joinBg from "../images/hero-btc.jpg";
import arabicjoinBg from "../images/hero-btc_ar.jpg";

import btcMedia from "../images/hero-btc-logo.png";


export default class JoinBtcRevolution extends Component {
    render() {
        let languageManager = this.props.languageManager();
        return(
            <div className="JoinBtcRevolution">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <img src={this.props.language !== 'ar' ? joinBg : arabicjoinBg} alt="" draggable={false}/>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <h2>
                                {languageManager.join_title[0]}<br/>
                                {languageManager.join_title[1]}
                            </h2>
                            <div className="bitcoin-media">
                                <span>
                                    {languageManager.btc_media}
                                </span>
                                <img src={btcMedia} alt="" draggable={false}/>
                            </div>
                            <div className="description">
                                <p>
                                    {languageManager.join_description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}