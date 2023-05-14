import { slate } from '@radix-ui/colors';
import { styled } from 'stitches.config';

export const Code = styled('code', {
  whiteSpace: 'nowrap',
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  margin: '0 2px',
  padding: '2px 0.25em',
  fontSize: '0.9em',
  border: `1px solid ${slate.slate5}`,
  borderRadius: '0.375rem',
  color: slate.slate12,
  backgroundColor: slate.slate2,
});
