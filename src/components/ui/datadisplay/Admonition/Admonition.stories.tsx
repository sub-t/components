import { Meta, StoryObj } from '@storybook/react';
import { Admonition } from './Admonition';

const meta: Meta<typeof Admonition> = {
  component: Admonition,
  args: {
    children:
      'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
  },
};

export default meta;
type Story = StoryObj<typeof Admonition>;

export const Note: Story = {
  args: {
    type: 'note',
  },
};

export const Caution: Story = {
  args: {
    type: 'caution',
  },
};

export const Important: Story = {
  args: {
    type: 'important',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
};
