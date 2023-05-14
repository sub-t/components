import { IconButton } from '@/components/ui';
import { Meta, StoryObj } from '@storybook/react';
import { FaHamburger } from 'react-icons/fa';
import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuCheckboxItem } from './DropdownMenuCheckboxItem';

const meta: Meta<typeof DropdownMenuCheckboxItem> = {
  component: DropdownMenuCheckboxItem,
  args: {
    children: 'アイテム',
  },
  decorators: [
    (Story) => (
      <DropdownMenu
        trigger={
          <IconButton aria-label="open dropdown menu">
            <FaHamburger />
          </IconButton>
        }
      >
        <Story />
      </DropdownMenu>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DropdownMenuCheckboxItem>;

export const NotChecked: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};
