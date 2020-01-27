import React, {Component} from 'react'
import ua from "../ua.svg";
import enFlag from "./images/gb.svg";
import noFlag from "./images/no.svg";
import svFlag from "./images/sv.svg";
import fiFlag from "./images/fi.svg";
import nlFlag from "./images/nl.svg";
import esFlag from "./images/es.svg";
import itFlag from "./images/it.svg";
import plFlag from "./images/pl.svg";
import deFlag from "./images/de.svg";
import ruFlag from "./images/ru.svg";
import arFlag from "./images/ar.svg";


export default class ModalWindow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show_customer_name: false,
            nameArr: "",
            flags: {
                enFlag,
                noFlag,
                svFlag,
                fiFlag,
                nlFlag,
                esFlag,
                itFlag,
                plFlag,
                deFlag,
                ruFlag,
                arFlag
            }
        }
    }

    componentDidMount() {
        let languageManager = this.props.languageManager();
        const namesElementsArray = languageManager.customers_name;
        this.setState({
            nameArr: namesElementsArray[1]
        }, () => {
            this.timer = setInterval(() => {
                namesElementsArray.unshift(namesElementsArray[5]);
                namesElementsArray.pop();
                this.setState({
                    show_customer_name: !this.state.show_customer_name,
                    nameArr: namesElementsArray[1]
                })
            },3000)
        });
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        let languageManager = this.props.languageManager();
        return (
            <div className="col-lg-6 col-md-6 hidden-block">
                <div id="modal-window" className={`show ${this.state.show_customer_name}`}>
                    <img src={this.state.flags[languageManager.flag]} alt=""/>
                    <div className="name">
                        <p>{this.state.nameArr}</p>
                    </div>
                    <div className="status">
                        <p>{languageManager.status}</p>
                    </div>
                </div>
            </div>
        )
    }
}