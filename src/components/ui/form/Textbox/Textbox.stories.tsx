import { Meta, StoryObj } from '@storybook/react';
import { Textbox } from './Textbox';

const meta: Meta<typeof Textbox> = {
  component: Textbox,
  args: {
    label: 'Email:',
  },
};

export default meta;
type Story = StoryObj<typeof Textbox>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    errorMessage: '不正な文字が含まれています'
  },
};
