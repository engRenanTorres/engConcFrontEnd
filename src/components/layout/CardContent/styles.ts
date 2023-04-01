import styled from 'styled-components';

export const Container = styled.main`
  background: ${({ theme }) => theme.palette.background.gradient};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    display: flex;
    width: 80%;
    max-width: 80%;
    background-color: ${({ theme }) => theme.palette.background.default};
    background-clip: border-box;
    border: 1px solid #e3e6f0;
    border-radius: 0.35rem;
  }
  .card-content {
    color: ${({ theme }) => theme.palette.neutral.light};
    width: 100%;
    padding: 1rem;
  }
  .bg-login-image {
    width: 0;
    background: none;
  }
  @media (min-width: 1024px) {
    .bg-login-image {
      width: 50%;
      background: url(${process.env.PUBLIC_URL + '/favicon.svg'});
      background-position: center;
      background-size: cover;
    }
    .card {
      min-height: 70%;
      min-width: 50rem;
    }
    .card-content {
      width: 50%;
    }
  }
`;
