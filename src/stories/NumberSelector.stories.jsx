import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, array } from '@storybook/addon-knobs';

import NumberSelector from '../components/NumberSelector';

export default {
  title: 'NumberSelector',
  decorators: [withKnobs],
};

export const normal = () => <NumberSelector onChange={action('clicked')} />;

export const filledValues = () => <NumberSelector onChange={action('clicked')} filledValues={array('Filled Values', [])} />;
