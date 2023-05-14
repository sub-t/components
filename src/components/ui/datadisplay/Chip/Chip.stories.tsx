import { Meta, StoryObj } from '@storybook/react';
import { IoMdClose } from 'react-icons/io';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: 'Chip',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        {'Chip'} <IoMdClose />
      </>
    ),
  },
};
