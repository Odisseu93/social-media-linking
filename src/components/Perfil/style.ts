import styled from 'styled-components';

export const Perfil = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  padding: 2rem;

  .photo {
    width: 197.41px;
    height: 197.41px;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1 {
      text-align: center;
    }

    span {
      display: inline-block;

      width: 200px;

      text-align: center;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;

    .title {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      width: 500px;

      h1 {
        text-align: left;
      }
      span {
        width: 100%;
        margin-left: 8rem;
      }
    }
  }
`;