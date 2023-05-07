import styled, { css } from 'styled-components';

export const StyledMain = styled.main`
  ${({ theme }) => css`
    color: ${theme.palette.neutral.light};
    padding: 0 2.5rem;
  `}
`;
