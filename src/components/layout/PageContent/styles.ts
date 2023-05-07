import styled from 'styled-components';
import { size } from '../../../styles/device-sizes';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${size.tablet}) {
    grid-template-columns: 3fr 1fr;
  }
`;
