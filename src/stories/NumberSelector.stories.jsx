import React from 'react';
import { action } from '@storybook/addon-actions';

import NumberSelector from '../components/NumberSelector';

export default {
  title: 'NumberSelector',
};

export const normal = () => <NumberSelector onChange={action('clicked')} />;
