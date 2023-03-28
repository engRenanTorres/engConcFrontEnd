import styled, { css } from 'styled-components';
import { Box } from '@mui/material';

export const StyledSection = styled.section`
  ${({ theme }) => css`
    color: ${theme.palette.neutral.light};
    padding: 0 2.5rem;
  `}
`;

export const StyledNavBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
