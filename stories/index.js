import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'common/style.scss'

import M_Select from 'M_Select';
import M_InputSelect from 'M_InputSelect'
import M_Swipe from 'M_Swipe'

storiesOf('M_Select', module)
  .add('', () => (
    <div style={{marginTop: 300}}>
      <M_Select
        options={[
          {value: 'en', label: <span><span style={{top: 1, marginRight: 13, position:'relative'}}>🇬🇧</span>English (UK)</span>},
          {value: 'ch', label: <span><span style={{top: 1, marginRight: 13, position:'relative'}}>🇨🇳</span>中文</span>},
          {value: 'es', label: <span><span style={{top: 1, marginRight: 13, position:'relative'}}>🇪🇸</span>Español</span>},
          {value: 'de', label: <span><span style={{top: 1, marginRight: 13, position:'relative'}}>🇩🇪</span>Deutsch</span>}
        ]}
        value = {'en'}
        onChange={action('select')}
      />
    </div>
  ));

storiesOf('M_InputSelect', module)
  .add('', () => (
    <div style={{marginTop: 100, marginBottom: 600  }}>
      <M_InputSelect
        options={['Technical', 'Second', 'Technical', 'Non technical', 'Others']}
        placeholder = 'Choose'
        onChange={action('select')}
      />
    </div>
  ))

storiesOf('M_Swipe', module)
  .add('', () => (
    <div style={{marginTop: 100, marginBottom: 600  }}>
      <M_Swipe
        onSwipedLeft={action('left')}
        onSwipedRight={action('right')}
        style={{border:'1px solid blue', display:'inline-block'}}
      ><div style={{width: 100, height: 100, backgroundColor: 'red'}}>
        swipe me
      </div>
      </M_Swipe>
    </div>
  ))