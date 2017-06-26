import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import SE_MainLayout from 'SE_MainLayout';
import { Button, Welcome } from '@storybook/react/demo';

storiesOf('SE_MainLayout', module)
  .add('', () => <SE_MainLayout/>)