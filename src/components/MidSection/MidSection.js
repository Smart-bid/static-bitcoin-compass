import React, { Component } from 'react'

import Partners from './Partners/Partners'
import JoinBtcRevolution from './JoinBtcRevolution/JoinBtcRevolution'

import Trend from "./Trend/Trend";

import FamousNames from "./FamousNames/FamousNames";
import Traders from "./Traders/Traders";
import Faq from "./Faq/Faq";
import logo from "../TopSection/logo.svg";
import Regform from "../TopSection/Regform/Regform";


export default class MidSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let languageManager = this.props.languageManager(),
            steps = [
                {
                    className: 'cardb',
                    inputs: [
                        {
                            name: 'first_name',
                            type: 'text',
                            className: 'input_small',
                            errorClass: 'inputError',
                            groupClass: 'formClass left'
                        },
                        {
                            name: 'last_name',
                            type: 'text',
                            className: 'input_small',
                            errorClass: 'inputError',
                            groupClass: 'formClass right'
                        },
                        {
                            name: 'email',
                            type: 'email',
                            className: 'input_big',
                            errorClass: 'inputError',
                            groupClass: 'formClass large'
                        },
                        {
                            name: 'phone_number',
                            type: 'phone_number',
                            className: 'input_small',
                            errorClass: 'inputError',
                            groupClass: 'formClass small left'
                        },
                        {
                            name: 'password',
                            type: 'password',
                            className: 'input_small',
                            errorClass: 'inputError',
                            groupClass: 'formClass small right',
                            listClass: 'req_list'
                        },
                        {
                            name: 'agree_1',
                            type: 'checkbox',
                            text: languageManager.agreement_first,
                            //errorClass: 'inputError',
                            links: [{text: 'Privacy Policy', to: '/'}],
                            groupClass: 'checkbox_text'
                        },
                        {
                            name: 'agree_2',
                            type: 'checkbox',
                            text: languageManager.agreement_second[0],
                            //errorClass: 'inputError',
                            links: [
                                {
                                    text: languageManager.agreement_second[1],
                                    to: '/terms'
                                },
                                {
                                    text: languageManager.agreement_second[2],
                                    to: '/privacy'
                                }
                            ],
                            groupClass: 'checkbox_text'
                        }
                    ],
                    button: {
                        className: 'button_forward',
                        text: languageManager.button
                    },
                    supportText: {
                        className: 'support_text',
                        image: {},
                        main: languageManager.more_title[0],
                        tooltip: languageManager.more_decription
                    }
                }
            ];

        return (
            <div className="MidSection">
                <Partners />

                <JoinBtcRevolution {...this.props}/>

                <Trend languageManager={this.props.languageManager}/>

                <FamousNames languageManager={this.props.languageManager}/>

                <Traders languageManager={this.props.languageManager}/>

                <Faq languageManager={this.props.languageManager}/>

                <div className="second-form">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>{languageManager.second_form}</h2>
                            </div>
                            <div className="col-lg-4 offset-lg-4 col-md-8 offset-md-2 form">
                                <div className="regform" ref={this.regPanel}>
                                    <div className="reg-title"><h3>{languageManager.title_form}</h3></div>
                                    <Regform {...this.props}
                                             loadingLogo={{
                                                 className: 'loading',
                                                 source: logo
                                             }}
                                             material={true}
                                             formSteps={steps}
                                             responseError={{
                                                 className: 'resError',
                                                 button: {
                                                     className: 'button_forward',
                                                     text: 'OK'
                                                 }
                                             }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
