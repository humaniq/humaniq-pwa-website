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
import FlyingLogos from 'SE_Home/InfoAnimation/FlyingLogos'
import A_Link from 'A_Link'
import A_Logo from 'A_Logo'

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

storiesOf('Logo', module)
  .addDecorator(storyFN => <div style={{backgroundColor: 'dodgerblue'}}>{storyFN()}</div>)
  .add('dark', () => (
    <A_Logo theme="dark"/>
  ))
  .add('light', () => (
    <A_Logo theme="light"/>
  ));

storiesOf('O_FlyingLogos', module)
  .add('', () => (
    <div style={{
      // backgroundColor: 'white',
      height: 339, width:440}}>
      <FlyingLogos />
    </div>
  ));

storiesOf('A_Link', module)
  .add('primary', () => (
      <A_Link type={'primary'}
        to="#"
      >Contact Us</A_Link>
  ))
  .add('section-link', () => (
    <A_Link type={'section-link'}
            to="#"
    >Learn more about Humaniq Use Cases</A_Link>
  ));


storiesOf('Header', module)
  .add('', () => (
      <Header
        isMenuOpened={false}
        onClick={action('click')}
      >Contact Us</Header>
  ));

