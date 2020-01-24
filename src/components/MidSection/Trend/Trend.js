import React, { Component } from 'react'
import blommbergLogo from './images/bloomberg.png'
import forbesgLogo from './images/forbes.png'

const Trend = (props) => {
    let languageManager = props.languageManager();
    return (
        <div className="Trend">
            <div className="container">
                <div className="row">
                        <h2 className="trade-title">{languageManager.trade_title}</h2>

                        <div className="steps-wrapper">
                            <div className="row">
                                {
                                    languageManager.trade_steps.map((item, i) => {
                                        return (
                                            <div className="col-lg-4 col-md-4 col-sm-4 step-item" key={i}>
                                                <div className="wrap">
                                                    <h4 className="heading">{item.title}{i + 1}</h4>
                                                    <div className="inner-info">
                                                        <strong>{item.name}</strong>
                                                        <p className="descr">
                                                            {item.descr}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="picture-block">
                            <div className="title">
                                <span>BTC</span>
                            </div>
                            <div className="arrow-indicator"></div>
                            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="3 0 243.52 94.97">
                                <defs>
                                    <clipPath id="clip-path" transform="translate(0 -3.19)">
                                        <rect className="cls-1" x="1.25" width="249.02" height="98.04"></rect>
                                    </clipPath>
                                </defs>
                                <g id="chart">
                                    <g className="cls-2">
                                        <g id="chart-group">
                                            <path className="cls-3" fill="#daeeba" id="chart-shape"
                                                  d="M247.5 98.5h-253v-6.4L-3 92l2.5-.1 3.1.2 2.5-.1 2.5.1 2.5-.1h7.5l2.5-.1 2.5-.1h5l2.5.1 2.5-.2 3.2-.4 2.5-.1 2.5-.7 2.5.4 2.5-.1 2.5.1h7.5l2.5.3h2.5l2.5.1h3.1l2.5-.1 2.5-.2 2.5.1 2.5.1 2.5-.1h2.5l2.5-.1 2.5-.1 2.5-.3 2.5.1h2.5l2.5-.2h3.1l2.5-.1h2.5l2.5-.1 2.5-.5 2.5-.3 2.5.3 2.5.4 2.5-.5h2.5l2.5-.5 2.5.1 2.5-.2 3.1-.5 2.5-.5 2.5.4 2.5.9 2.5.1 2.5-.6 2.5-.4h2.5l2.5-.5 2.5-.3 2.5-1 2.5-1 2.5-1.2h3.2l2.5-2.3 2.5-1.6 2.5 1.2 2.5.3 2.5.7 2.5-.7 2.5 2.7 2.5-4 2.5.6 2.5-2.5 2.5-2.9 3.1-1.3 2.5-.9 2.5-1.1 2.5 1.2 2.5 2.9 2.5-.4 2.5-2.7 2.5-.3 2.5-6.4 2.5-.9 2.5 1.3 2.5-7.7 2.5 4.9 3.1-6.7 2.5-4.5 2.5-10 2.5-18.5 2.5-20.7 2.5 13.7 2.5 9L247 9.8z"></path>
                                            <g id="chart-line" className="cls-4">
                                                <path vectorEffect="non-scaling-stroke" fill="none" stroke="#337ab7"
                                                      strokeWidth="2" d="M-300-294"></path>
                                                <path vectorEffect="non-scaling-stroke" fill="none" stroke="#3aaa35"
                                                      strokeLinecap="round" strokeMiterlimit="10"
                                                      d="M-5.5 92.1L-3 92l2.5-.1 3.1.2 2.5-.1 2.5.1 2.5-.1h7.5l2.5-.1 2.5-.1h5l2.5.1 2.5-.2 3.2-.4 2.5-.1 2.5-.7 2.5.4 2.5-.1 2.5.1h7.5l2.5.3h2.5l2.5.1h3.1l2.5-.1 2.5-.2 2.5.1 2.5.1 2.5-.1h2.5l2.5-.1 2.5-.1 2.5-.3 2.5.1h2.5l2.5-.2h3.1l2.5-.1h2.5l2.5-.1 2.5-.5 2.5-.3 2.5.3 2.5.4 2.5-.5h2.5l2.5-.5 2.5.1 2.5-.2 3.1-.5 2.5-.5 2.5.4 2.5.9 2.5.1 2.5-.6 2.5-.4h2.5l2.5-.5 2.5-.3 2.5-1 2.5-1 2.5-1.2h3.2l2.5-2.3 2.5-1.6 2.5 1.2 2.5.3 2.5.7 2.5-.7 2.5 2.7 2.5-4 2.5.6 2.5-2.5 2.5-2.9 3.1-1.3 2.5-.9 2.5-1.1 2.5 1.2 2.5 2.9 2.5-.4 2.5-2.7 2.5-.3 2.5-6.4 2.5-.9 2.5 1.3 2.5-7.7 2.5 4.9 3.1-6.7 2.5-4.5 2.5-10 2.5-18.5 2.5-20.7 2.5 13.7 2.5 9L247 9.8"></path>
                                                <path vectorEffect="non-scaling-stroke" fill="none" stroke="#337ab7"
                                                      strokeWidth="1.1" d="M-190-39"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <div className="years-chart">
                                <span>2015</span>
                                <span>2016</span>
                                <span>2017</span>
                                <span>2018</span>
                            </div>
                        </div>

                        <div className="chart-info">
                            <p>
                                {languageManager.chart_info}
                            </p>
                            <div className="logos">
                                <img src={blommbergLogo} alt=""/>
                                <img src={forbesgLogo} alt=""/>
                            </div>
                        </div>

                </div>
            </div>

        </div>
    )
}
export default Trend;