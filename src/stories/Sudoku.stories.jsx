import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

import Sudoku, { SudokuCell } from '../components/Sudoku';

const options = {
  min: 0,
  max: 9,
};

export default {
  title: 'Sudoku',
  decorators: [withKnobs],
};

export const normal = () => <SudokuCell value={number('Value', 0, options)} setCell={action('Cell Clicked')} />;

export const sudoku = () => <Sudoku />;
