import { WithCss } from '@/types/common';
import { ComponentProps, forwardRef, useId } from 'react';
import { ErrorMessage } from './ErrorMessage';
import { FormLabel } from './FormLabel';
import { Input } from './Input';

type Props = ComponentProps<typeof Input> &
  WithCss & {
    label: string;
    errorMessage?: string;
  };

export const Textbox = forwardRef<HTMLInputElement, Props>(function Textbox(
  { label, errorMessage, ...props },
  ref,
) {
  const inputId = useId();
  const errorMessageId = useId();

  return (
    <>
      <FormLabel htmlFor={inputId}>{label}</FormLabel>
      <Input
        {...props}
        id={inputId}
        ref={ref}
        aria-invalid={!!errorMessage}
        aria-errormessage={errorMessageId}
      />
      {errorMessage && (
        <ErrorMessage id={errorMessageId}>{errorMessage}</ErrorMessage>
      )}
    </>
  );
});
