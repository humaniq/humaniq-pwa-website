import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'common/style.scss'

import M_Select from 'M_Select';

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
  ))