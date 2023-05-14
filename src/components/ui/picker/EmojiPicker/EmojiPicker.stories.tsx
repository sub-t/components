import { Meta, StoryObj } from '@storybook/react';
import { EmojiPicker } from './EmojiPicker';

const meta: Meta<typeof EmojiPicker> = {
  component: EmojiPicker,
};

export default meta;
type Story = StoryObj<typeof EmojiPicker>;

export const Default: Story = {
  args: {
    defaultEmoji: '😀',
    onClick: (emoji) => {
      console.log(emoji);
    },
  },
};
