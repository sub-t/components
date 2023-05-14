import { Meta, StoryObj } from '@storybook/react';
import { MultiSelect } from './MultiSelect';

const meta: Meta<typeof MultiSelect> = {
  component: MultiSelect,
  args: {
    items: [
      { label: 'タグ1', value: '1' },
      { label: 'タグ2', value: '2' },
      { label: 'タグ1', value: '3' },
      { label: 'タグ2', value: '4' },
      { label: 'タグ1', value: '5' },
      { label: 'タグ2', value: '6' },
    ],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSelect: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {};
