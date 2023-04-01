import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ children }: Props) => {
  return (
    <StyledButton>
      <a>{children}</a>
    </StyledButton>
  );
};
