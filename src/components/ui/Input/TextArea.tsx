import React, { TextareaHTMLAttributes } from 'react';
import { StyledInput } from './styles';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export const TextArea: React.FC<Props> = ({ name, label, ...rest }: Props) => {
  return (
    <StyledInput>
      {!!label && <label htmlFor={name}>{label}</label>}
      <textarea name={name} {...rest}></textarea>
    </StyledInput>
  );
};
