import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Game from '../components/Game';

export default {
  title: 'Game',
  decorators: [withKnobs],
};

export const emptySudoku = () => <Game />;
