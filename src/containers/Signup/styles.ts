import styled from 'styled-components';
import { spacings } from '../../styles/typography';

export const Container = styled.div`
  margin-bottom: ${spacings.medium};
  padding: 0 ${spacings.medium};

  h1 {
    text-align: center;
  }

  .link {
    color: blue;
    text-align: center;
    width: auto;
  }
  .link:hover {
    text-decoration: underline blue;
    cursor: pointer;
  }

  hr {
    margin-top: ${spacings.large};
    width: 100%;
  }
  .options {
    display: flex;
    flex-direction: column;
    padding: ${spacings.large} 0;
  }
`;
