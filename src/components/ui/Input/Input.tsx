import React, { InputHTMLAttributes } from 'react';
import { StyledInput } from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Input: React.FC<Props> = ({
  name,
  label,
  type = 'text',
  ...rest
}: Props) => {
  return (
    <StyledInput>
      {!!label && <label htmlFor={name}>{label}</label>}
      <input name={name} type={type} {...rest} />
    </StyledInput>
  );
};
