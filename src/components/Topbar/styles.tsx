import styled, { css } from 'styled-components';
import { Box } from '@mui/material';
import { spacings } from '../../styles/typography';

export const StyledBox = styled(Box)`
  ${({ theme }) => css`
    background: ${theme.palette.background.default};
    color: ${theme.palette.neutral.light};
    display: flex;
    justify-content: space-between;
    padding: ${spacings.small};

    .icon-button {
      color: ${theme.palette.neutral.light};
    }

    .search-box {
      display: ${'flex'};
      background: ${'#fdfdfd'};
      border-radius: ${'3px'};
    }
  `}
`;
