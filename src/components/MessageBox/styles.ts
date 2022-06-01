import styled from "styled-components";

export const Container = styled.div`
  width: 47.5%;
  height: 15rem;

  background-color: ${props => props.theme.color.tertiary};
  color: ${props => props.theme.color.white};

  border-radius: 7px;
  margin: 1.25rem 0;
  padding: 1.75rem 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header img {
    width: 2.25rem;
    margin-left: .75rem;
  }

  > header p {
    font-size: 1.125rem;
  }

  @media(max-width: 770px){
    width: 100%;

    > header h1{
      font-size: 1.5rem;

      img {
        height: 1.25rem;
        width: 1.25rem;
      }
    }

    > header p, > footer span{
      font-size: .875rem;
    }
  }

  @media(max-width: 420px){
    height: auto;

    > header p{
      margin-bottom: 1rem;
    }
  }
`;
