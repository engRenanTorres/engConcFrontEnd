import styled from 'styled-components';
import { spacings, typography } from '../../styles/typography';

export const Container = styled.div`
  background: linear-gradient(180deg, #04a49cff 10%, #025854 100%) !important;
  border-radius: 5px;
  color: #fdfdfd;
  margin-bottom: ${spacings.medium};
  padding: ${spacings.medium};

  .jumbotron-title {
    font-size: ${typography.h1.fontSize};
    font-style: italic;
  }
  .jumbotron-subtitle {
    font-size: ${typography.h2.fontSize};
    padding-bottom: ${spacings.medium};
  }
`;
