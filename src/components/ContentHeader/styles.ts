import styled from "styled-components";

interface ITitleContainerProps {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 1.5rem;

  @media(max-width: 320px) {
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
  > h1{
    color: ${props => props.theme.color.white};

    &::after{
      content: '';
      display: block;
      width: 3.5rem;
      border-bottom: 10px solid ${props => props.lineColor};
    }

    @media(max-width: 420px) {
      > h1{
        font-size: 1.25rem;
      }

      &::after{
        content: '';
        display: block;
        width: 3.5rem;
        border-bottom: 5px solid ${props => props.lineColor};
      }
    }
  }
`;

export const Controllers = styled.div`
  display: flex;

  @media(max-width: 320px) {
    width: 100%;
    justify-content: space-around;
    margin-top: 1.25rem;
  }
`;
