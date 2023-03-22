import styled, { css } from 'styled-components';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';

export const StyledIcon = styled(IconButton)`
  color: ${({ theme }) => theme.palette.neutral.light};
  .icon-button {
    color: ${({ theme }) => theme.palette.neutral.light};
  }
`;

export const StyledNavBox = styled(Box)`
  ${({ theme }) => css`
      display:${'flex'};
      justify-content:${'center'};
      align-items=${'center'};
      & .pro-sidebar-inner: {
          background: ${theme.palette.primary.light} !important;
          height: 100vh;
      };
      & .pro-icon-wrapper: {
        backgroundColor: transparent !important;
      };
      & .pro-inner-item: {
        padding: 5px 35px 5px 20px !important;
      };
      & .pro-inner-item:hover: {
        color: #868dfb !important;
      };
      & .pro-menu-item.active: {
        color: #6870fa !important;
      };
  `}
`;
