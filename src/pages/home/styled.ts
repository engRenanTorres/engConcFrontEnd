import styled, { css } from 'styled-components';
import { Box } from '@mui/material';
import { typography } from '../../styles/typography';

export const StyledSection = styled.section`
  background: ${({ theme }) => theme.palette.background.default};
  padding: 0 2.5rem;
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
