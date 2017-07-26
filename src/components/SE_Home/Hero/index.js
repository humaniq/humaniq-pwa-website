import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HomeHero')

// import A_Image from 'A_Image'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Btn from 'A_Btn'
// import Title from './title'
import BVideo from 'react-background-video-player'
import A_Container from 'A_Container'


class SE_HomeHero extends Component {

  state = {
    isPlaying: undefined,
    isMuted: undefined,
    progress: 0,
    currentTime: 0,
    duration: 0,
  }
  componentDidMount() {
    this.setState({
      isPlaying: !this.player.isPaused,
      isMuted: this.player.isMuted,
    });
  }

  render() {



    return (
      <div className={cn('back-img')}>
        <BVideo
          playsInline = {false}
          src={'/video/hero704.mp4'}
          ref={p => this.player = p}
          containerWidth={1280}
          containerHeight={'auto'}
          poster={'/img/hero-image.png'}
          onPlay={this.handleOnPlay}
          onPause={this.handleOnPause}
          onMute={this.handleOnMute}
          onUnmute={this.handleOnUnmute}
          horizontalAlign = {3000}
          style={{
            top: '50%',
            transform: 'translate(-50%,-50%)',
            left: '50%',
            width: 1280
          }}
      />
        <div style={{backgroundColor:'rgba(0,0,0,0.3)', width: '100%'}}>
          <A_Container type="video-hero">
            <div className={cn('wrapper')}>
              <div className={cn('inner')}>
                <A_H type="video-hero">Empowering 3.5 Billion People in the world economy</A_H>
                <A_P type="video-hero">Humaniq is a simple and secure mobile app, delivering financial inclusion solutions to the 2.5 billion unbanked / 1 billion under banked globally.</A_P>
                <A_Btn type="link-subscribe" to="/form/subscribe">Subscribe</A_Btn>
              </div>
            </div>
          </A_Container>
        </div>
      </div>
    )
  }
}

SE_HomeHero.propTypes = {
  explorerData: T.array.isRequired
};

SE_HomeHero.defaultProps = {
}
export default SE_HomeHero
