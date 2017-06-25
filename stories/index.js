import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Text from './Text';
import A_Button from 'A_Button';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <A_Button onClick={action('clicked')}>Hello Button</A_Button>)

storiesOf('Text', module)
  .add('Text', () => <Text />)