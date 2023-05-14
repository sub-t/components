import { DropdownMenu, DropdownMenuCheckboxItem } from '@/components/ui';

type CheckboxItemProps = {
  label: string;
  value: string;
};

type Props = {
  items: CheckboxItemProps[];
  onCheckedChange: (value: string, checked: boolean) => void;
  checkList: string[];
};

export const DropdownCheckList = (props: Props) => {
  const { items, onCheckedChange, checkList } = props;

  return (
    <DropdownMenu trigger={<button>button</button>}>
      {items.map((item) => {
        const checked = checkList.includes(item.value);
        return (
          <DropdownMenuCheckboxItem
            key={item.value}
            onCheckedChange={(checked) => onCheckedChange(item.value, checked)}
            checked={checked}
          >
            {item.label}
          </DropdownMenuCheckboxItem>
        );
      })}
    </DropdownMenu>
  );
};
