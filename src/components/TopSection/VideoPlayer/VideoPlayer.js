import React, {Component} from 'react'
import ReactPlayer from 'react-player'

import enVideo from './en-video.mp4'
import btn from './play_btn.png'

export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            play: false,
            hide: true
        }
    }

    hideElement = () => {
        this.setState({
            hide: !this.state.hide,
            play: !this.state.play
        });
    };


    render() {
        return (
            <div className="VideoPlayer">
                <div className={`videoOverlayInner ` + this.state.hide} onClick={this.hideElement}>
                    <p>Tap to watch and learn the secret!</p>
                    <img src={btn} alt="play-button"/>
                </div>
                <ReactPlayer url={enVideo} playing={this.state.play} controls={true} muted width='100%' height='100%' onClick={this.props.trackVideoPlay}/>
            </div>
        )
    }
}