import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import 'common/style.scss'
import './styles.scss'


import M_Select from 'M_Select';
import M_InputSelect from 'M_InputSelect'
import M_Swipe from 'M_Swipe'
import O_Hero from 'O_Hero'
import O_QuickTip from 'O_QuickTip'
import O_ArticleList from 'O_ArticleList'

storiesOf('M_Select', module)
  .add('', () => (
    <div style={{marginTop: 300}}>
      <M_Select
        options={[
          {
            value: 'en',
            label: <span><span style={{top: 1, marginRight: 13, position: 'relative'}}>🇬🇧</span>English (UK)</span>
          },
          {
            value: 'ch',
            label: <span><span style={{top: 1, marginRight: 13, position: 'relative'}}>🇨🇳</span>中文</span>
          },
          {
            value: 'es',
            label: <span><span style={{top: 1, marginRight: 13, position: 'relative'}}>🇪🇸</span>Español</span>
          },
          {
            value: 'de',
            label: <span><span style={{top: 1, marginRight: 13, position: 'relative'}}>🇩🇪</span>Deutsch</span>
          }
        ]}
        value={'en'}
        onChange={action('select')}
      />
    </div>
  ));

storiesOf('M_InputSelect', module)
  .add('', () => (
    <div style={{marginTop: 100, marginBottom: 600}}>
      <M_InputSelect
        options={['Technical', 'Second', 'Technical', 'Non technical', 'Others']}
        placeholder='Choose'
        onChange={action('select')}
      />
    </div>
  ))

storiesOf('M_Swipe', module)
  .add('', () => (
    <div style={{marginTop: 100, marginBottom: 600}}>
      <M_Swipe
        onSwipedLeft={action('left')}
        onSwipedRight={action('right')}
        style={{border: '1px solid blue', display: 'inline-block'}}
      >
        <div style={{width: 100, height: 100, backgroundColor: 'red'}}>
          swipe me
        </div>
      </M_Swipe>
    </div>
  ));

storiesOf('O_Hero', module)
  .add('', () => (
    <div style={{marginTop: 50, marginBottom: 50}}>
      <O_Hero
        inbuild={{
          img: 'img/mock/holder_120x120.png',
          title: 'Technical Mecca',
          text: 'Maecenas quis condimentum libero. Phasellus lorem lacus, laoreet sed consectetur in, sagittis non nunc.',
          url: '/#'
        }}
        framed={{
          img: 'img/mock/holder_128x128.png',
          title: 'About Humaniq',
          text: 'Donec fermentum sapien eu posuere pulvinar. Sed dapibus massa ut dapibus faucibus. Aenean facilisis odio.',
          url: '/#'
        }}
      />
    </div>
  ))

storiesOf('O_QuickTip', module)
  .add('', () => (
    <div style={{backgroundColor: 'white', paddingBottom: 50, paddingTop: 50, width: 768}}>
      <O_QuickTip
        imgSrc='img/mock/holder_25x25.png'
        question='Have questions about your account?'
        tip={{text: 'Find out more', url:'#'}}
      />
    </div>
  ));

//O_ArticleList

storiesOf('O_ArticleList', module)
  .add('', () => (
    <div style={{backgroundColor: 'white', paddingBottom: 50, paddingTop: 50,
      // width: 1280, margin: '0 auto'
    }}>
      <O_ArticleList
        articles={[
          {src:'#', title:'Lorem ipsum dolor sit amet?'},
          {src:'#', title: <span style={{textDecoration: 'underline'}}>Consectetur adipiscing elit</span>},
          {src:'#', title:'Sed rhoncus a ligula ut semper'},
          {src:'#', title: <span>Maecenas id <strong>sapien</strong> in enim faucibus</span>},
          {src:'#', title:'Curabitur sollicitudin rhoncus viverra '},
          {src:'#', title: <span><strong>In varius dui</strong> ut dui placerat interdum</span>},
          {src:'#', title:'Vestibulum pharetra libero porttitor'},
          {src:'#', title: <span>Donec vitae <strong>bibendum</strong> ligula</span>},
          {src:'#', title:'Nullam ornare sed nisi non molestie'},
          {src:'#', title:'Aenean vestibulum rhoncus tellus'},
          {src:'#', title: <span>Ac <strong>viverra ipsum</strong> ultrices viverra</span>},
          {src:'#', title:'Interdum et malesuada fames ac ante '},
        ]}
      />
    </div>
  ));