import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Wiki')
const teaser = {title: 'Welcome to Humaniq Wiki', description: 'Here you’ll find any useful information you need.'}
import O_Teaser from 'O_Teaser'
import M_TeaserStandardContent from 'M_TeaserStandardContent'
import O_Hero from 'O_Hero'
import O_QuickTip from 'O_QuickTip'
import O_ArticleList from 'O_ArticleList'
const SE_Wiki = () => (
  <div className={cn('root')}>
    <O_Teaser theme='dark'>
      <M_TeaserStandardContent teaser={teaser}/>
    </O_Teaser>
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
    <div className={cn('tip')}>
      <O_QuickTip
        imgSrc='img/mock/holder_25x25.png'
        question='Have questions about your account?'
        tip={{text: 'Find out more', url:'#'}}
      />
    </div>
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
)

SE_Wiki.propTypes = {};

SE_Wiki.defaultProps = {}

export default SE_Wiki