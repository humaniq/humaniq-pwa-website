import React from 'react';
import 'common/style.scss'

import {
  storiesOf,
  addDecorator
} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';


// import { withKnobs,
//   text,
//   // boolean,
//   // number
// } from '@storybook/addon-knobs';

// import M_Select from 'M_Select';
// import M_InputSelect from 'M_InputSelect'
// import M_Swipe from 'M_Swipe'
// import O_Hero from 'O_Hero'
// import O_QuickTip from 'O_QuickTip'
// import O_ArticleList from 'O_ArticleList'
// import A_Btn from 'A_Btn'
import O_FlyingLogos from 'O_FlyingLogos'
import A_Link from 'A_Link'
import Header from 'SE_MainLayout/Header'
import Footer from 'SE_MainLayout/Footer'
import SE_MainLayout from 'SE_MainLayout'


const styleDecorator = (storyFn) => (
  <div style={{
    width:'100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    {storyFn()}
  </div>
)

const tablet = (storyFn) => (
  <div style={{
    maxWith: 768
  }}>
    {storyFn()}
  </div>
)

const mobile = (storyFn) => (
  <div style={{
    maxWith: 320
  }}>
    {storyFn()}
  </div>
)



addDecorator(styleDecorator)

storiesOf('O_FlyingLogos', module)
  .add('', () => (
    <div style={{
      // backgroundColor: 'white',
      height: 339, width:440}}>
      <O_FlyingLogos />
    </div>
  ));

storiesOf('A_Link', module)
  .add('', () => (
    <div style={{
      // backgroundColor: 'white',
      height: 339, width:1280}}>
      <A_Link
        to="#"
      >Contact Us</A_Link>
    </div>
  ));


storiesOf('Header', module)
  .add('', () => (
      <Header
        isMenuOpened={false}
        onClick={action('click')}
      >Contact Us</Header>
  ));



// storiesOf('A_Btn', module)
//   .add('Normal', () => (
//     <A_Btn
//       onChange={action('click')}
//     >Normal</A_Btn>
//   ))
//   .add('Disabled', () => (
//     <A_Btn
//       onChange={action('click')}
//       disabled
//     >Disabled</A_Btn>
//   ))
//   .add('Normal Light Link', () => (
//     <A_Btn
//       type="link"
//       onChange={action('click')}
//       style="light-link"
//     >Normal</A_Btn>
//   ))
//   .add('Disabled Light Link', () => (
//     <A_Btn
//       type="link"
//       onChange={action('click')}
//       style="light-link"
//       disabled
//     >Normal</A_Btn>
//   ))
//   .add('Normal Dark Link', () => (
//     <A_Btn
//       type="link"
//       onChange={action('click')}
//       style="dark-link"
//     >Normal</A_Btn>
//   ))
//   .add('Disabled Dark Link', () => (
//     <A_Btn
//       type="link"
//       onChange={action('click')}
//       style="dark-link"
//       disabled
//     >Normal</A_Btn>
//   ))
//   .add('link from wiki + normal link', ()=>(
//     <div>
//       <A_Btn
//         onChange={action('click')}
//       >Normal</A_Btn>
//       <A_Btn
//         type="link"
//         style="button-link"
//       >Normal</A_Btn>
//       <A_Btn
//         type="link"
//         onChange={action('click')}
//         style="light-link"
//       >Normal</A_Btn>
//
//       sdfasdf     <A_Btn
//       type="link"
//       onChange={action('click')}
//       style="light-link"
//     >Normal</A_Btn> ssdfasd
//     </div>
//   ))
//
//
//
//
//
// storiesOf('M_Select', module)
//   .add('', () => (
//       <M_Select
//         options={[
//           {
//             value: 'en',
//             label: <span><span style={{top: 1, marginRight: 13, position: 'relative'}}>🇬🇧</span>English (UK)</span>
//           },
//           {
//             value: 'ch',
//             label: <span><span style={{top: 1, marginRight: 13, position: 'relative'}}>🇨🇳</span>中文</span>
//           },
//           {
//             value: 'es',
//             label: <span><span style={{top: 1, marginRight: 13, position: 'relative'}}>🇪🇸</span>Español</span>
//           },
//           {
//             value: 'de',
//             label: <span><span style={{top: 1, marginRight: 13, position: 'relative'}}>🇩🇪</span>Deutsch</span>
//           }
//         ]}
//         value={'en'}
//         onChange={action('select')}
//       />
//   ));
//
// storiesOf('M_InputSelect', module)
//   .add('', () => (
//       <M_InputSelect
//         options={['Technical', 'Second', 'Technical', 'Non technical', 'Others']}
//         placeholder='Choose'
//         onChange={action('select')}
//       />
//   ))
//
// storiesOf('M_Swipe', module)
//   .add('', () => (
//       <M_Swipe
//         onSwipedLeft={action('left')}
//         onSwipedRight={action('right')}
//         style={{border: '1px solid blue', display: 'inline-block'}}
//       >
//         <div style={{width: 100, height: 100, backgroundColor: 'red'}}>
//           swipe me
//         </div>
//       </M_Swipe>
//   ));
//
// storiesOf('O_Hero', module)
//   .add('', () => (
//       <O_Hero
//         inbuild={{
//           img: 'img/mock/holder_120x120.png',
//           title: text('ibuild-title', 'Technical Mecca'),
//           text: text('ibuild-text', 'Maecenas quis condimentum libero. Phasellus lorem lacus, laoreet sed consectetur in, sagittis non nunc.'),
//           url: '/#'
//         }}
//         framed={{
//           img: 'img/mock/holder_128x128.png',
//           title: text('framed-title', 'About Humaniq'),
//           text: text('framed-text', 'Donec fermentum sapien eu posuere pulvinar. Sed dapibus massa ut dapibus faucibus. Aenean facilisis odio.'),
//           url: '/#'
//         }}
//       />
//   ))
//
// storiesOf('O_QuickTip', module)
//   .add('', () => (
//     <div style={{backgroundColor: 'white'}}>
//       <O_QuickTip
//         imgSrc='img/mock/holder_25x25.png'
//         question='Have questions about your account?'
//         tip={{
//           text: 'Find out more',
//           url:'#'
//         }}
//       />
//     </div>
//   ));
//
//
// storiesOf('O_ArticleList', module)
//   .add('', () => (
//     <div style={{backgroundColor: 'white', paddingBottom: 50, paddingTop: 50}}>
//       <O_ArticleList
//         articles={[
//           {src:'#', title:'Lorem ipsum dolor sit amet?'},
//           {src:'#', title: <span style={{textDecoration: 'underline'}}>Consectetur adipiscing elit</span>},
//           {src:'#', title:'Sed rhoncus a ligula ut semper'},
//           {src:'#', title: <span>Maecenas id <strong>sapien</strong> in enim faucibus</span>},
//           {src:'#', title:'Curabitur sollicitudin rhoncus viverra '},
//           {src:'#', title: <span><strong>In varius dui</strong> ut dui placerat interdum</span>},
//           {src:'#', title:'Vestibulum pharetra libero porttitor'},
//           {src:'#', title: <span>Donec vitae <strong>bibendum</strong> ligula</span>},
//           {src:'#', title:'Nullam ornare sed nisi non molestie'},
//           {src:'#', title:'Aenean vestibulum rhoncus tellus'},
//           {src:'#', title: <span>Ac <strong>viverra ipsum</strong> ultrices viverra</span>},
//           {src:'#', title:'Interdum et malesuada fames ac ante '},
//         ]}
//       />
//     </div>
//   ));


