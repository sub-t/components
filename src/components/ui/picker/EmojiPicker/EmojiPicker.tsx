import { EmojiClickData } from 'emoji-picker-react';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import { IconButton } from '../../form/IconButton';
import { Popover } from '../../overlay/Popover';

const Picker = dynamic(
  () => {
    return import('emoji-picker-react');
  },
  { ssr: false },
);

type Props = {
  defaultEmoji?: string;
  onClick: (emoji: string) => void;
};

export const EmojiPicker = (props: Props) => {
  const { onClick, defaultEmoji } = props;
  const [emoji, setEmoji] = useState(defaultEmoji ?? '');

  const handleEmojiClick = useCallback(
    (emojiData: EmojiClickData) => {
      setEmoji(emojiData.emoji);
      onClick(emojiData.emoji);
    },
    [onClick],
  );

  return (
    <Popover trigger={<IconButton>{emoji}</IconButton>}>
      <Picker onEmojiClick={handleEmojiClick} />
    </Popover>
  );
};
