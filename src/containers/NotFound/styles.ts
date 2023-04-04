import styled from 'styled-components';
import { spacings } from '../../styles/typography';

export const Container = styled.div`
  margin-bottom: ${spacings.medium};
  padding: 0 ${spacings.medium};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  h1 {
    text-align: center;
  }

  .link {
    color: blue;
    text-align: center;
    width: auto;
    margin: ${spacings.medium} 0;
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
