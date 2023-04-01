import styled, { css } from 'styled-components';
import { spacings, typography } from '../../../styles/typography';

export const StyledInput = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    label {
      padding-bottom: ${spacings.small};
    }
    input {
      background: #fff;
      border: 1px solid ${theme.palette.background.antiDefault};
      border-radius: 3rem;
      color: ${theme.palette.neutral.light};
      margin-bottom: ${spacings.small};
      padding: ${spacings.small};
      height: ${typography.fontSize.large};
    }
    input:hover {
      border: 1px solid ${theme.palette.background.strong};
    }
    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid #e3e6f0;
      border-radius: 0.35rem;
    }
  `}
`;
