import styled, { css } from 'styled-components';
import { spacings, typography } from '../../../styles/typography';
import { shade } from 'polished';

export const StyledButton = styled.button`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: blue;
    border: 0;
    border-radius: 3rem;
    transition: all 0.5s;
    a {
      color: #fdfdfd;
      width: 100%;
      padding: ${spacings.small};
      height: ${typography.fontSize.large};
    }
    :hover {
      cursor: pointer;
      background: ${shade(0.2, 'blue')};
    }
    a:hover {
      font-weight: 600;
    }
    :active {
      border: 1px solid black;
    }
    @keyframes press {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.92);
      }
      to {
        transform: scale(1);
      }
    }
    @keyframes bounce {
      50% {
        transform: rotate(5deg) translate(20px, -50px);
      }
      to {
        transform: scale(0.9) rotate(10deg) translate(50px, -80px);
        opacity: 0;
      }
    }
  `}
`;
