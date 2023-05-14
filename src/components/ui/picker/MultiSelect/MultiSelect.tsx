import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  IconButton,
  ScrollArea,
} from '@/components/ui';
import { useCallback, useState } from 'react';
import { BsTagsFill } from 'react-icons/bs';

type Item = {
  label: string;
  value: string;
};

type Props = {
  items: Item[];
  onSelect: (value: string[]) => void;
};

export const MultiSelect = (props: Props) => {
  const { onSelect } = props;
  const [items, setItems] = useState(
    props.items.map((item) => ({ ...item, selected: false })),
  );

  const handleSelect = useCallback(
    (value: string) => {
      const newItems = items.map((item) =>
        item.value === value ? { ...item, selected: !item.selected } : item,
      );
      setItems(newItems);
      return newItems;
    },
    [items],
  );

  return (
    <DropdownMenu
      trigger={
        <IconButton>
          <BsTagsFill />
        </IconButton>
      }
      loop
    >
      <ScrollArea css={{ maxHeight: 256 }}>
        {items.map((item) => {
          return (
            <DropdownMenuCheckboxItem
              key={item.value}
              onSelect={(e) => {
                e.preventDefault();

                const newItems = handleSelect(item.value);
                onSelect(newItems.map((item) => item.value));
              }}
              checked={item.selected}
            >
              {item.label}
            </DropdownMenuCheckboxItem>
          );
        })}
      </ScrollArea>
    </DropdownMenu>
  );
};
